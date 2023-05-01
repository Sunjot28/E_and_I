const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
  secret: "ourLittleSecret",
  resave: false,
  saveUninitialized: false,
  cookie: {secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());

main().catch(err => console.log(err));

async function main() {
    // mongoose.connect('mongodb://0.0.0.0:27017/Login-RegisterDB', {
    mongoose.connect('mongodb+srv://Kishan:KishanPandey@cluster0.e5d4sxz.mongodb.net/login-registerDB', {
        // mongodb+srv://rahul:rahul2001@cluster0.vdcn75k.mongodb.net/hostel
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    description: {
      name: { type: Array, default: [] },
      email: { type: Array, default: [] },
      phoneNumber: { type: Array, default: [] },
      feedback: { type: Array, default: [] }
    }
  });

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema)

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

function isAuthenticated(req, res, next) {
    if(req.session && req.session.user) {
        return next;
    }
    else {
        return res.status(401).json({error: "Unauthorized access"});
    }
}

//Routes
app.post("/login", (req, res) => {
const email = req.body.email;   
const password = req.body.password; 
    
User.findOne({email: email})
.then(function (foundUser) {
    if(foundUser) {
        bcrypt.compare(password, foundUser.password, function(err, result) {
            if(result === true) {
                req.session.user = foundUser;
                res.send({ message: "Login Successful", user: foundUser})
            } else {
                return res.status(401).json({error: "Incorrect email or password"});
            }
        });
    }
        else {
            return res.status(401).json({error: "Incorrect email or password"});
        }
    })
.catch(function (err) {     
    return res.status(500).json({error: err.message});
})
});

app.post("/register", (req, res)=> {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        });
        newUser.save()
        .then(function () { 
            res.send({ message: "Successfully registered, login now!"})
        })
        .catch(function (err) {     
            return res.status(500).json({error: err.message});
        })
    })
});

app.post("/contactus", (req, res) => {
    const { name, email, phoneNumber, feedback } = req.body;
  
    User.findOne({email: email})
    // User.findById(req.user._id)
      .then(function(foundUser) {
        foundUser.description.name.push(name);
        foundUser.description.email.push(email);
        foundUser.description.phoneNumber.push(phoneNumber);
        foundUser.description.feedback.push(feedback);
        foundUser.save()
          .then(function () {
            res.send({ message: "Your valuable feedback is much appreciated!"})
          });
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).send({ message: "Error occurred while saving feedback" });
      });
  });

app.get("/logout", function(req, res){
  req.session.destroy(err => {
    if(err) {
        return res.status(500).json({error: err.message});
    } else {
        res.clearCookie("connect.sid")
        res.status(200).json({ message: "Logout successful" });
    }
  })
});

// check if user is authenticated before serving protected routes
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/protected_route", isLoggedIn, function(req, res){
  res.send("You are authenticated!");
});

app.listen(5000, () => {
    console.log("BE started at port 5000")
});