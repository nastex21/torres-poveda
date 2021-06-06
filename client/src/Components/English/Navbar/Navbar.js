import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../../assets/Logo/blackwhitepovedalogo.jpg";
import Container from "react-bootstrap/Container";

function NavbarHeader({ location, changeLang }) {
  const selectEnglish = () => {
    changeLang(0);
  };

  const selectSpanish = () => {
    changeLang(1);
  };

  console.log(location);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbarMain"
        style={{ backgroundColor: "black" }}
      >
        <Container>
     {/*      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              className="d-inline-block align-top brandImage img-responsive"
            />
          </Navbar.Brand> */}
          <Navbar.Text
            className="active activeLang"
            onClick={selectEnglish}
            style={{ cursor: "pointer" }}
          >
            Eng
          </Navbar.Text>
          <Navbar.Text
            className="inactiveLang"
            onClick={selectSpanish}
            style={{ cursor: "pointer" }}
          >
            Esp
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <FontAwesomeIcon icon={faBars} className="hamburgerIcon" />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className={location.pathname == "/" ? "active activeLocation" : null}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={location.pathname == "/gallery" ? "active activeLocation" : null}
              href="/gallery"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className={location.pathname == "/contact" ? "active activeLocation" : null}
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
 
      </Navbar>
    </>
  );
}

export default NavbarHeader;
