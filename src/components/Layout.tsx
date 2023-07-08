import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout: React.FC = (): JSX.Element => {
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
