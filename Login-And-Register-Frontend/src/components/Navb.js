import React from "react";
import "../App.css";
import { navLinks } from "./constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navb() {
  return (
<<<<<<< HEAD
    <Navbar id="navigation2" sticky="top">
      <Navbar.Collapse className="justify-content-center">
=======
    <Navbar className="navigation">
      <Navbar.Brand href="#home" style={{ color: "white" }} className="ml-4">
        Logo
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
>>>>>>> cd47e74cfa1b4b413b3643cb71cfc64ddebc6e79
        <Navbar className="justify-content-end">
          {navLinks.map((nav, index) => (
            <Nav.Link
              style={{ color: "white" }}
              href={nav.link}
<<<<<<< HEAD
              className={`zoom navLinks ${
                index === navLinks.length - 1 ? "mr-0" : "mr-5"
=======
              className={`zoom ${
                index === navLinks.length - 1 ? "mr-0" : "mr-2"
>>>>>>> cd47e74cfa1b4b413b3643cb71cfc64ddebc6e79
              }`}
            >
              {nav.title}
            </Nav.Link>
          ))}
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;
