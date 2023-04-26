import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./getStarted.css";

function Start() {

    const navigate = useNavigate();

    return (
        <div>
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
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    </div>
                    <div className="feature-box">
                        <div className="features">
                            <h1>Welcome Everyone!</h1>
                            <div class="features-desc">
                                <div className="feature-text">
                                    <p>Tristique sollicitudin nibh sit amet commodo nulla facilisi. Volutpat blandit aliquam etiam erat velit. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Id donec ultrices tincidunt arcu non. Non diam phasellus vestibulum lorem sed risus ultricies. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Aliquet porttitor lacus luctus accumsan tortor. Cursus sit amet dictum sit amet justo donec enim diam.</p>
                                </div>
                            </div>
                        </div>
                        <div class="features-img">
                            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></img>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Start;