import React from "react";
import Logo from "./Logo";
import Navb from "./Navb";
import Layout from "./Layout";
import { eventDetails } from "./constants";
import CardGroup from "react-bootstrap/CardGroup";

function createCard(eventDetails) {
  return (
    <Layout
      id={eventDetails.id}
      key={eventDetails.id}
      img={eventDetails.img}
      title={eventDetails.title}
      month={eventDetails.month}
      date={eventDetails.date}
      desc={eventDetails.desc}
    />
  );
}

function event() {
  return (
    <div className="bg-image">
      <Logo />
      <Navb />
      <div className="header-event-container">
                <div className="header-event">
                    <h1 className="title-event">Events</h1>
                </div>
            </div>
      <CardGroup className="Card_Group">
        {eventDetails.map(createCard)}
      </CardGroup>
    </div>
  );
}

export default event;