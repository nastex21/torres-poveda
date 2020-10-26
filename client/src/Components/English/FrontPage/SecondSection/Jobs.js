import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import houseIcon from "../../../../assets/Icons/house.png";
import kitchenIcon from "../../../../assets/Icons/kitchen.png";
import tubIcon from "../../../../assets/Icons/tub.png";

function Jobs() {
  return (
    <>
      {/* For Desktop */}
      <div className="w-100 desktopServices">
        <Container className="d-none d-md-block p-0">
          <Row className="d-none d-md-block m-0 w-100 servicesSection">
            <div className="w-100 h-100 blackScreen">
              <Row className="h-100">
                <Col>
                  <div className="serviceInfoContent">
                    <div className="service-first-section">
                      <p className="serviceHeader">Our Services.</p>
                    </div>
                    <div className="service-second-section">
                      <p className="serviceQuestion">What can we do for you?</p>
                    </div>
                    <div className="service-third-section">
                      <p className="serviceServices">
                        We offer a wide range of remodeling services including
                        bathroom, kitchen, plumbing, electrical, flooring and
                        texturing.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="darkerScreen screentopMargin">
                    <div className="service-padding">
                      <div className="service-first-section">
                        <div className="circle-icon">
                          <img
                            className="serviceIcons"
                            src={houseIcon}
                            alt="icon of a house"
                          />
                        </div>
                      </div>
                      <div className="service-second-section">
                        <p className="serviceTitle">Home</p>
                      </div>
                      <div className="service-third-section third-section-content">
                        <p>Flooring</p>
                        <p>Electrical</p>
                        <p>Wall textures</p>
                        <p>Ceiling textures</p>
                        <p>Painting</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="darkerScreen screenbottomMargin">
                    <div className="service-padding">
                      <div className="service-first-section">
                        <div className="circle-icon">
                          <img
                            className="serviceIcons"
                            src={kitchenIcon}
                            alt="icon of a kitchen"
                          />
                        </div>
                      </div>
                      <div className="service-second-section">
                        <p className="serviceTitle">Kitchen</p>
                      </div>
                      <div className="service-third-section third-section-content kitchen-third">
                        <p>Cabinets</p>
                        <p>Lighting</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="darkerScreen screentopMargin">
                    <div className="service-padding">
                      <div className="service-first-section">
                        <div className="circle-icon">
                          <img
                            className="serviceIcons"
                            src={tubIcon}
                            alt="icon of a tub"
                          />
                        </div>
                      </div>
                      <div className="service-second-section">
                        <p className="serviceTitle">Bathroom</p>
                      </div>
                      <div className="service-third-section third-section-content">
                        <p>Tile</p>
                        <p>Shower</p>
                        <p>Tub</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
      {/* For Mobile */}
      <Container fluid className="d-md-none p-0 sectionServices">
        <div className="servicesSection">
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

export default Jobs;
