import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import splashImage from "../../assets/Background/splash.jpg";
import bathroomTile from '../../assets/Background/bathroomtile.jpg';

function FrontPage() {
  return (
    <div
      className="container-fluid h-100 w-100 p-0"
    >
      <Row className="m-0 h-100 w-100 splashPage" style={{ backgroundImage: `url(${splashImage})` }}>
        <div className="welcomeMsg">
          <div className="welcomeHeader">
            <h1>Turning remodeling dreams into REALITY.</h1>
          </div>
          <div className="welcomeContact">
            <p>Contact us for a FREE estimate on remodeling your home.</p>
          </div>
          <div className="welcomeDirection">
            <p>Just click on the button below!</p>
          </div>
          <div className="welcomeBtn w-100">
            <button className="button glass green-a">FREE ESTIMATE</button>
          </div>
        </div>
      </Row>
      <Row className="m-0 w-100 servicesSection" style={{ backgroundImage: `url(${bathroomTile})` }}>
        <Col lg="4">
        </Col>
        <Col>
        </Col>
        <Col >
        </Col>
        <Col >
        </Col>
      </Row>
    </div>
  );
}

export default FrontPage;
