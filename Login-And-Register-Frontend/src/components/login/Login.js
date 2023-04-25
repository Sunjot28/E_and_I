import React, {useState} from "react"
import "./login.css"
<<<<<<< HEAD
import Logo from "../Logo";
=======
>>>>>>> cd47e74cfa1b4b413b3643cb71cfc64ddebc6e79
import { useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => alert(res.data.message));
    }

    return (
<<<<<<< HEAD
      <div>
        <Logo />
        <div className="center">
          <div className="outerbox">
            <div className="leftbox1">
              <h1>Login to Your Account</h1>

              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={user.email}
                placeholder="Email"
              ></input>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                value={user.password}
                placeholder="Password"
              ></input>
              <div>
                <button
                  type="button"
                  onClick={login}
                  class="lbutton btn btn-secondary btn-lg"
                >
                  Login
                </button>
              </div>

              <div className="or">OR</div>

              <a
                class="googlebutton btn btn-outline-secondary"
                role="button"
                href="/auth/google"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google"
                />
                Login with Google
              </a>
            </div>

            <div className="rightbox1">
              <h1>New Here?</h1>
              <p>Sign up to join us!</p>
              <div>
                <button
                  onClick={() => navigate("/register")}
                  type="button"
                  class="rbutton btn btn-secondary btn-lg"
                >
                  Sign Up
                </button>
              </div>
=======
      <div className="center">
        <div className="outerbox">
          <div className="leftbox1">
            <h1>Login to Your Account</h1>

            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={user.email}
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={user.password}
              placeholder="Password"
            ></input>
            <div>
              <button
                type="button"
                onClick={login}
                class="lbutton btn btn-secondary btn-lg"
              >
                Login
              </button>
            </div>

            <div className="or">OR</div>

            <a
              class="googlebutton btn btn-outline-secondary"
              role="button"
              href="/auth/google"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google"
              />
              Login with Google
            </a>
          </div>

          <div className="rightbox1">
            <h1>New Here?</h1>
            <p>Sign up to join us!</p>
            <div>
              <button
                onClick={() => navigate("/register")}
                type="button"
                class="rbutton btn btn-secondary btn-lg"
              >
                Sign Up
              </button>
>>>>>>> cd47e74cfa1b4b413b3643cb71cfc64ddebc6e79
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login