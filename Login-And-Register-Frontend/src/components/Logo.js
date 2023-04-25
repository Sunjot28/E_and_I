import React from 'react'
import Navbar from "react-bootstrap/Navbar";

function Logo() {
  return (
    <Navbar className="navigation1">
      <Navbar.Brand href="#home" style={{ color: "black" }} className="ml-4">
        Logo
      </Navbar.Brand>
    </Navbar>
  );
}

export default Logo