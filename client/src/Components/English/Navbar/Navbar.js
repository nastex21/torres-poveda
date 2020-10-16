import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../../assets/logo/blackwhitepovedalogo.jpg";

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
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            className="d-inline-block align-top brandImage img-responsive"
          />
        </Navbar.Brand>
        <Navbar.Text
          className="active"
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
              className={location.pathname == "/" ? "active" : null}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={location.pathname == "/gallery" ? "active" : null}
              href="/gallery"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className={location.pathname == "/contact" ? "active" : null}
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
