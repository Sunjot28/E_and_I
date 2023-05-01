import React, {useState} from "react"
import "../register/Register";
import Logo from "../Logo"
import Navb from "../Navb";
import "./contactus.css"
import { useNavigate } from "react-router-dom"
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios"

const ContactUs = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const contact = async () => {
    const { name, email, phoneNumber, feedback } = user;
      //alert("posted")
      //console.log(user)
      await axios.post("http://localhost:5000/contactus", user)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate("/home")
        })
        .catch((err) => {
          console.log(err);
          alert("Cannot post feedback! Check email and try again.");
        });
      }; 

    return (
      <div>
        <Logo />
        <Navb />

        <div className="contactusBody">
          <div className="outerbox">
            <div className="leftbox2">
              <h4>Get in touch with us!</h4>
              <p>
                <CallIcon /> +91 9007815845
              </p>
              <p>
                <MailIcon /> vksk2024@gmail.com
              </p>
              <p>
                <LocationOnIcon /> Bhubaneswar, Odisha
              </p>
            </div>

            <div className="rightbox2">
              <div className="formHeadings">Name</div>
              <input
                type="text"
                className="formInput"
                onChange={handleChange}
                name="name"
                value={user.name}
                placeholder="Your Name"
              ></input>

              <div className="formHeadings">Email</div>
              <input
                type="text"
                className="formInput"
                onChange={handleChange}
                name="email"
                value={user.email}
                placeholder="Your Email"
              ></input>

              <div className="formHeadings">Phone Number</div>
              <input
                type="number"
                className="formInput"
                onChange={handleChange}
                name="phoneNumber"
                value={user.phoneNumber}
                placeholder="Phone Number"
              ></input>

              <div className="formHeadings">Your Feedback</div>
              <textarea
                type="textarea"
                className="formInput"
                rows="4"
                size="100"
                onChange={handleChange}
                name="feedback"
                value={user.feedback}
                placeholder="Write your Feedback here"
              ></textarea>

              <button
                type="button"
                onClick={contact}
                style={{ marginTop: "4px" }}
                class="lbutton btn btn-secondary btn-lg"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;
