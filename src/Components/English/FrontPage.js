import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import splashImage from "../../assets/Background/splash.jpg";
import bathroomTile from "../../assets/Background/bathroomtile.jpg";
import houseIcon from "../../assets/Icons/house.png";
import kitchenIcon from "../../assets/Icons/kitchen.png";
import tubIcon from "../../assets/Icons/tub.png";

function FrontPage() {
  return (
    <>
      <Container fluid className="p-0">
        <Row
          className="m-0 w-100 splashPage"
          style={{ backgroundImage: `url(${splashImage})` }}
        >
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
      </Container>
      <Container fluid className="d-none d-md-block p-0">
        <Row
          className="d-none d-md-block m-0 w-100 servicesSection"
          style={{ backgroundImage: `url(${bathroomTile})` }}
        >
          <div className="w-100 h-100 blackScreen">
            <Row sm={2}>
              <Col>
                <h1 className="serviceHeader">Our Services.</h1>
                <h4 className="serviceQuestion">What can we do for you?</h4>
                <p className="serviceServices">
                  We offer a wide range of remodeling services including
                  bathroom, kitchen, plumbing, electrical, flooring and
                  texturing.
                </p>
              </Col>
            </Row>
            <Row sm={10}>
              <Col xs={4} sm={4}>
                <div className="circle-icon">
                  <img
                    className="serviceIcons"
                    src={houseIcon}
                    alt="icon of a house"
                  />
                </div>
                <h3>Home</h3>
                <p>Flooring</p>
                <p>Electrical</p>
                <p>Wall textures</p>
                <p>Ceiling textures</p>
                <p>Painting</p>
              </Col>
              <Col xs={4} sm={4}>
                <div className="circle-icon">
                  <img
                    className="serviceIcons"
                    src={kitchenIcon}
                    alt="icon of a kitchen"
                  />
                </div>
                <h3>Kitchen</h3>
                <p>Cabinets</p>
                <p>Lighting</p>
              </Col>
              <Col xs={4} sm={4}>
                <div className="circle-icon">
                  <img
                    className="serviceIcons"
                    src={tubIcon}
                    alt="icon of a tub"
                  />
                </div>
                <h3>Bathroom</h3>
                <p>Tile</p>
                <p>Shower</p>
                <p>Tub</p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <Container fluid className="d-md-none p-0 sectionServices">
        <div
          className="servicesSection"
          style={{ backgroundImage: `url(${bathroomTile})` }}
        >
          <div className="w-100 h-100 blackScreen">
            <div className="headerServices">
              <h3 className="serviceHeader">Our Services.</h3>
              <h5 className="serviceQuestion">What can we do for you?</h5>
              <p className="serviceServices">
                We offer a wide range of remodeling services including bathroom,
                kitchen, plumbing, electrical, flooring and texturing.
              </p>
            </div>

            <CardGroup>
              <Card>
                <div className="circle-icon">
                  <Card.Img variant="top" src={houseIcon} />
                </div>
                <Card.Body>
                  <Card.Title>Home</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Flooring</ListGroup.Item>
                    <ListGroup.Item>Electrical</ListGroup.Item>
                    <ListGroup.Item>Wall Textures</ListGroup.Item>
                    <ListGroup.Item>Ceiling Textures</ListGroup.Item>
                    <ListGroup.Item>Painting</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card>
                <div className="circle-icon">
                  <Card.Img variant="top" src={kitchenIcon} />
                </div>
                <Card.Body>
                  <Card.Title>Kitchen</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Cabinets</ListGroup.Item>
                    <ListGroup.Item>Lighting</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>

              <Card>
                <div className="circle-icon">
                  <Card.Img variant="top" src={tubIcon} />
                </div>
                <Card.Body>
                  <Card.Title>Bathroom</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Tile</ListGroup.Item>
                    <ListGroup.Item>Shower</ListGroup.Item>
                    <ListGroup.Item>Tub</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </Container>
    </>
  );
}

export default FrontPage;
