import React from 'react';

import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function SortFilter() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Activity</Nav.Link>
          <Nav.Link href="#">Brand</Nav.Link>
          <Nav.Link href="#">Instrument</Nav.Link>
          <Nav.Link href="#">Wood</Nav.Link>
          <Nav.Link href="#">Weight</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Sort By</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default SortFilter;
