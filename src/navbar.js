import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Collapse } from 'react-bootstrap';

function Navs() {
  return (
    <Navbar bg="" data-bs-theme="light" style={{ backgroundColor: 'transparent' }}>
      <Container fluid maxWidth="lg" className="navbar-container">
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/039/206/753/small_2x/old-windmill-hand-drawn-ink-sketch-vector.jpg"
              alt="Dutch Girl Cleaning"
              width="80"
              height="70"
              className="me-2"
            />
            <h3>Dutch Girl <br />Cleaning</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/testimonials" className="nav-link">Testimonials</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contactus" className="nav-link">Contact Us</Link>
          </Nav>
          <Nav.Item className="text-nowrap">
            <h5>Call Us Today! <br></br>(509) 201-0098</h5>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;