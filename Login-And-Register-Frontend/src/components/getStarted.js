import React from "react";
import "../App.css";
import Logo from "./Logo";

function Start() {

    return (
        <div>
            <div>
                <Logo />
            </div>
            <div className="main-container">
                <h1>Events & Internships</h1>
                <p>What are you waiting for?</p>
                <div className="main-btns">
                    <button className="btns"><span></span>GET STARTED</button>
                    <button className="btns"><span></span>READ MORE</button>
                </div>
            </div>
            <div className="second-container">
                <h1>About</h1>
                <p>We are a very nice, sexy people working for your help to masturbate, day and night!</p>
            </div>
        </div>
    );
}

export default Start;