import React from "react";
import "../App.css";
import { navLinks } from "./constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navb() {
  return (
    <Navbar className="navigation">
      <Navbar.Brand href="#home" style={{ color: "white" }} className="ml-4">
        Logo
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar className="justify-content-end">
          {navLinks.map((nav, index) => (
            <Nav.Link
              style={{ color: "white" }}
              href={nav.link}
              className={`zoom ${
                index === navLinks.length - 1 ? "mr-0" : "mr-2"
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
