import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import Fab from "@mui/material/Fab";


function Layout(props) {
  return (
    <Col sm style={{ display: "flex", justifyContent: "center" }}>
      <div className="eventCard">
        <Card border="white">
          <Card.Img
            className="cardImg"
            //style={{ width: "351px", height: "175px" }}
            variant="top"
            src={props.img}
          />

          <Fab className="starButton zoom">
            <StarBorderRoundedIcon fontSize="small" />
          </Fab>

          <Card.Body className="cardBody" style={{ height: "130px" }}>
            <div>
              <div className="month">{props.month}</div>
              <div className="date">{props.date}</div>
            </div>
            <div className="info">
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.desc}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}

export default Layout;