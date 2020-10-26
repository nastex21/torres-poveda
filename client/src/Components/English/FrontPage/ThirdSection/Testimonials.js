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
    <div className="testimonialsDiv vh-100 w-100">
      <Container className="p-0 h-100">
        <Row className="h-50">
          <Col className="align-self-center">
          <div className="testimonialHeaderDiv">
            <p className="testimonialHeader">Meet Some of <br /> Our Customers.</p>
          </div>
          </Col>
        </Row>
        <Row className="flex-grow-1 align-items-end">
          <Col className="d-flex align-items-end h-100">
            <div className="greenBoxTestimonial  h-100">
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
          <Col className="d-flex align-items-end">
            <div className="greenBoxTestimonial">
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
          <Col className="d-flex align-items-end">
            <div className="greenBoxTestimonial">
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
