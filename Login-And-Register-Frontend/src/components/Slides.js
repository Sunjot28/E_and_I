import React from "react";
import "../App.css";
//import Button from "react-bootstrap/Button";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
import eventImage from "../assets/event.jpg";
import internshipImage from "../assets/internship2.jpg";

function Slides() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={eventImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="slideHeading">Events</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={internshipImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="slideHeading">Internships</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;