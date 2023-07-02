import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="false"
      sticky="top"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mb-2" />
        <Navbar.Collapse id="responsive-navbar-nav" className="mt-3 ">
          <Nav className="ms-auto text-end">
            <LinkContainer to="/posts">
              <Nav.Link>Посты</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Обо мне</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
