import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      className="primaryBackgroundColor navBar pl-5 pr-5 pt-0 pb-0"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand
        className="pl-md-5"
        as={Link}
        to="/"
        style={{ color: 'var(--primaryTextColor)' }}
      >
        <img
          src="./Logo.png"
          width="auto"
          height="100px"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto pr-md-5">
          <Nav.Item className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/cool"
              style={{ color: 'var(--primaryTextColor)', opacity: '0.5' }}
              activeStyle={{ color: '#ffffff', opacity: '1' }}
              eventKey="1"
            >
              katherine being cool
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/anime"
              style={{ color: 'var(--primaryTextColor)', opacity: '0.5' }}
              activeStyle={{ color: '#ffffff', opacity: '1' }}
              eventKey="2"
            >
              anime
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/onlyfans"
              style={{ color: 'var(--primaryTextColor)', opacity: '0.5' }}
              activeStyle={{ color: '#ffffff', opacity: '1' }}
              eventKey="3"
            >
              onlyfans
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
