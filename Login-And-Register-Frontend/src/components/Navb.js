import React from "react";
import "../App.css";
import { navLinks } from "./constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Navb({handleLogout}) {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout;
    navigate("/");
  }

  return (

    <Navbar id="navigation2" sticky="top">
      <Navbar.Collapse className="justify-content-center">
        <Navbar className="justify-content-end">
          {navLinks.map((nav, index) => (
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => navigate(nav.link)}
              className={"zoom navLinks mr-5"
              }>
              {nav.title}
            </Nav.Link>
          ))}
          <Nav.Link
              style={{ color: "white" }}
              onClick={handleLogoutClick}
                className={"zoom navLinks mr-0"
              }>
              Logout
              </Nav.Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;