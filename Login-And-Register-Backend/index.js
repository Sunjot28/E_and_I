const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

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

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email })
        .then(function (user) {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Login Successful", user: user })
                } else {
                    res.send({ message: "Password didn't match" })
                }
            } else {
                res.send({ message: "User not registered" })
            }
        })
        .catch(function (err) {
            res.send(err);
        })
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
    const {name, email, password} = req.body  //extracting values from req.body
    
    
    // const userExists = User.findOne({email: email}); //User->model     err or else user object return which contains (name, email, password)
    //         if(userExists){
    //             res.send({message: "User already registered"})
    //         }
    //         else{
        User.findOne({ email: email })
        .then(function (user) {
            if (user) {
                res.send({ message: "User already registered" })
            } else {
                const newUser = new User({    //extracted values(name,email,password) stored in user ....here User is the module (User)
                    name,
                    email,
                    password,
                })
                newUser.save()
                    .then(function () {
                        res.send({ message: "Successfully Registered, Please login now." })
                    })
                    .catch(function (err) {
                        res.send(err);
                    })  
           }
    })
})

app.listen(5000, () => {
    console.log("BE started at port 5000")
})