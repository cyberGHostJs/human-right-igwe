import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../images/logo-top.png";

const Navigation = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={isNavFixed ? "fixed-top" : "navbarNorm"}
      variant="dark"
    >
      <Navbar.Brand className="navigation_logo" href="#home">
        <Image src={logo} alt="logo" /> <span>APDHR</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* {THE SPACE BETWEEN LOGO AND NAVIGATION} */}
        </Nav>
        <Nav className="navigation_links">
          <Nav.Link href="/" active>
            HOME
          </Nav.Link>
          {/* <Nav.Link href="#">PAGES</Nav.Link> */}
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#gallery">GALLERY</Nav.Link>
          <Nav.Link href="#blog">BLOG</Nav.Link>
          <Nav.Link href="#contact">CONTACTS</Nav.Link>
          <Nav.Link href="#">GET INVOLVED/ DONATE</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
