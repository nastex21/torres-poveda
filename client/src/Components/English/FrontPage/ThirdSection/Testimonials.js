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
    <div className="w-100">
      <Container>
        <Row>
          <h1>Meet Our Customers.</h1>
        </Row>
        <Row>
          <Col>
            <div className="greenBoxTestimonial">
              <Row>
                <img className="imageTestimonial" src={firstImage} />
              </Row>
              <Row>
                <h3>Grettel Villarreal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row>
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
              </Row>
            </div>
          </Col>
          <Col>
            <div className="greenBoxTestimonial">
              <Row>
                <img className="imageTestimonial" src={secondImage} />
              </Row>
              <Row>
                <h3>Elizabeth Salazar</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row>
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
                <img className="starsImage" src={starImage} />
              </Row>
            </div>
          </Col>
          <Col>
            <div className="greenBoxTestimonial">
              <Row>
                <img className="imageTestimonial" src={thirdImage} />
              </Row>
              <Row>
                <h3>Random dude</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex{" "}
                </p>
              </Row>
              <Row>
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
