import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
const Layout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
