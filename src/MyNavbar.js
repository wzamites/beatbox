import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>

      <Navbar.Brand href="#home">beatbox</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
          <Nav.Link href="#home">Get Started</Nav.Link>
          <Nav.Link href="#link">Products</Nav.Link>
          <Nav.Link href="#how">How It Works</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-secondary">Sign Up</Button>
          <Nav.Link href="#login">Sign In</Nav.Link>
          <Nav.Link href="#login">
            <i class="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Nav>

        </Navbar.Collapse>

</Container>

    </Navbar>
  );
}

export default MyNavbar;
