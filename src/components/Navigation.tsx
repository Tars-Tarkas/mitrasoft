import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-3 ">
            <Nav className="me-auto text-end">
              <Nav.Link as={NavLink} to="/">
                Посты
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                Обо мне
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
