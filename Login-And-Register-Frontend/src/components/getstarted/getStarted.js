import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./getStarted.css";
import Logo from "../Logo";

function Start() {

    const navigate = useNavigate();

    return (
        <div>
            <Logo />
            <section id="main-container">
                <h1>Events & Internships</h1>
                <p>What are you waiting for?</p>
                <div className="main-btns">
                    <button className="btns" onClick={() => navigate("/login")}><span></span>GET STARTED</button>
                    <button className="btns" onClick={(e) => {
                        window.location.href="#second-container"; 
                        e.preventDefault();
                        e.stopPropagation(); 
                    }}><span></span>READ MORE</button>
                </div>
            </section>
            <section id="second-container">
                    <div className="title-text">
                        <h1>About</h1>
                        <p>Keep in the Loop with Events and Internship Opportunities!</p>
                    </div>
                    <div className="feature-box">
                        <div className="features">
                            <h1>Hey Everyone!</h1>
                            <div class="features-desc">
                                <div className="feature-text">
                                    <p>We are here to revolutionize the way college students stay updated about events and internships. With a simple sign-up process, students can receive notifications about upcoming events on campus, such as club meetings, career fairs, and guest speaker sessions that they want to know about. Additionally, E&I partners with companies, organizations and most importantly, the university placement cell to provide exclusive internship opportunities to its users. Say goodbye to missing out on valuable experiences and hello to <span>E & I!</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="features-img">
                            <img src="https://i.ibb.co/H2ZMf8x/Us.jpg" alt="Us" border="0"></img>
                        </div>
                    </div>
                    <div className="post-button">
                        <button className="post-btn">?</button>
                    </div>
            </section>
        </div>
    );
}

export default Start;