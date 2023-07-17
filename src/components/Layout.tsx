import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
