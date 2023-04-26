import React from "react";
import Logo from "./Logo";
import Navb from "./Navb";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Logo />
      <Navb />

      <div>
        <div className="hp-main-container bgImage1">
          <h1>Events</h1>
          <p>Click on Explore to have a look on some exciting events!</p>
          <div className="hp-main-btns">
            <button className="btns" onClick={() => navigate("/Event")}>
              <span></span>EXPLORE NOW
            </button>
          </div>
        </div>

        <div className="hp-main-container bgImage2">
          <h1>Internships</h1>
          <p>Get an opportunity to work with big MNC's!</p>
          <div className="hp-main-btns">
            <button className="btns" onClick={() => navigate("/")}>
              <span></span>APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage

