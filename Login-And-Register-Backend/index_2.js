const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//     secret: "mysecret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false,
//         httpOnly: true,
//         maxAge: 60 * 60 * 1000
//     }
// }))

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
})

const User = new mongoose.model("User", userSchema)

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next;
    }
    res.redirect("/login");
}

// app.get("/home", isAuthenticated (req, res) {
//         // axios.get("http://localhost:5000/login")
//     })

//Routes
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password; 
    
    User.findOne({email: email})
    .then(function (foundUser) {
        if(foundUser) {
            bcrypt.compare(password, foundUser.password, function(err, result) {
                if(result === true) {
                    // req.session.userId = foundUser._id;
                    res.send({ message: "Login Successful", user: foundUser})
                }
            })
        }
    })
    .catch(function (err) {     
        res.send(err);
    })
})

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
            res.send(err);
        })
    })
})

app.listen(5000, () => {
    console.log("BE started at port 5000")
})