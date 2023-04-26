import React from "react";
import "../App.css";
import { navLinks } from "./constants";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navb() {
  return (
    <Navbar id="navigation2" sticky="top">
      <Navbar.Collapse className="justify-content-center">
        <Navbar className="justify-content-end">
          {navLinks.map((nav, index) => (
            <Nav.Link
              style={{ color: "white" }}
              href={nav.link}
              className={`zoom navLinks ${
                index === navLinks.length - 1 ? "mr-0" : "mr-5"
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
