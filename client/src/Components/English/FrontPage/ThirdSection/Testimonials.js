import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firstImage from "../../../../assets/Testimonials/1stImage.jpg";
import secondImage from "../../../../assets/Testimonials/2ndImage.jpg";
import thirdImage from "../../../../assets/Testimonials/3rdImage.jpg";
import starImage from "../../../../assets/Icons/starIcon.png";

function Testimonials() {
  return (
    <div className="testimonials vh-100">
      <Container className="vh-100">
        <Row className="headerRow align-items-end">
          <Col className="justify-content-end">
            <p className="testiHeader" style={{ textAlign: "right" }}>
              Meet Some of <br /> Our Customers.
            </p>
          </Col>
        </Row>
        <Row className="testimonialsRows">
          <Col style={{ margin: "0", padding: "0" }}>
            <div className="white"></div>
            <div className="green"></div>
            <div></div>
            <div className="h-100 onTopTesti">
              <Row className="justify-content-center">
                <img className="imageTestimonial" src={firstImage} />
              </Row>
              <Row className="justify-content-center">
                <h3>Grettel Villarreal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row className="justify-content-center">
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
              </Row>
            </div>
          </Col>
          <Col style={{ margin: "0", padding: "0" }}>
            <div className="white"></div>
            <div className="green"></div>
            <div className="h-100 onTopTesti">
              <Row className="justify-content-center">
                <img className="imageTestimonial" src={secondImage} />
              </Row>
              <Row className="justify-content-center">
                <h3>Elizabeth Salazar</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row className="justify-content-center">
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
              </Row>
            </div>
          </Col>
          <Col style={{ margin: "0", padding: "0" }}>
          <div className="white"></div>
            <div className="green"></div>
            <div className="h-100 onTopTesti">
              <Row className="justify-content-center">
                <img className="imageTestimonial" src={thirdImage} />
              </Row>
              <Row className="justify-content-center">
                <h3>Random dude</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row className="justify-content-center">
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
