import React, {useState} from "react"
import "./register.css"
import Logo from "../Logo"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({ 
        name: "", 
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, 
            [name]: value
        })
    }

    // const register = async () => {
    //     const {name, email, password, reEnterPassword} = user
    //     if(name && email && password && (password === reEnterPassword)){
    //         await axios.post("http://localhost:9002/register", user)  //to send post request to the server.
    //         .then(res => alert(res.data.message))
    //     }
    //     else{
    //         alert("Invalid Input!")
    //     }
    // } 

    const register = async () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword))
        {
            //alert("posted")
            //console.log(user)
            await axios.post("http://localhost:5000/register", user)
             .then( res => {
                console.log(res);
                alert(res.data.message);
        })
        .catch(err=>{
            console.error(err);
            alert("Cannot Register !")
        });
        }
        else{
            alert("Invalid Input");
        }
      }

    return (
      <div>
        <Logo />

        <div className="center">
          <div className="outerbox">
            <div className="leftbox2">
              <h1>Already have an account?</h1>
              <div>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  class="rbutton btn btn-secondary btn-lg"
                >
                  Login
                </button>
              </div>
            </div>

            <div className="rightbox2">
              <h1>Create Account</h1>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={user.name}
                placeholder="Your Name"
              ></input>
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={user.email}
                placeholder="Your Email"
              ></input>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={user.password}
                placeholder="Your Password"
              ></input>
              <input
                type="password"
                onChange={handleChange}
                name="reEnterPassword"
                value={user.reEnterPassword}
                placeholder="Re-enter Password"
              ></input>
              <button
                type="button"
                onClick={register}
                class="lbutton btn btn-secondary btn-lg"
              >
                Sign Up
              </button>

              <div className="or">OR</div>

              <button
                type="button"
                class="googlebutton btn btn-outline-secondary"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google"
                />
                SignUp with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register