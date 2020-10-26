import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

function SplashPage() {
  return (
    <>
      <Jumbotron>
        <Container w-100>
          <Row className="m-0 w-100 splashPage">
            <div className="welcomeMsg w-100">
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
      </Jumbotron>
    </>
  );
}

export default SplashPage;
