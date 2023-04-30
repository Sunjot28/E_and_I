const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
import Login from "../Login-And-Register-Frontend/src/components/login/Login";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
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
    name: String,
    email: String,
    password: String,
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get("/login", (req, res) => {
    res.render("/login");
});

//Routes
app.post("/login", (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
      });
    
      req.login(user, function (err) {
        if (user) {
            passport.authenticate("local")(req, res, function () {
                res.send({ message: "Login successful", user: user})
            })
        } else {
            console.log(err);
        }
      });
})

// app.post("/register", (req, res) => {
//     const { name, email, password } = req.body
//     User.findOne({ email: email })
//         .then(function (user) {
//             if (user) {
//                 res.send({ message: "User already registered" })
//             } else {
//                 const user = new User({
//                     name,
//                     email,
//                     password
//                 })
//                 user.save()
//                     .then(function () {
//                         res.send({ message: "Successfully Registered, Please login now." })
//                     })
//                     .catch(function (err) {
//                         res.send(err);
//                     })
//             }
//         })
//         .catch(function (err) {
//             res.send(err);
//         })
// })

app.post("/register", (req, res)=> {
    User.register({ name: req.body.name }, { email: req.body.email }, { password: req.body.password })
    .then(function (user) {
      passport.authenticate("local")(req, res, function () {
        res.send({message: "Successfully Registered, Please login now."})
    });
  })
  .catch(function (err) {
    res.send(err);
  })
})

app.listen(5000, () => {
    console.log("BE started at port 5000")
})