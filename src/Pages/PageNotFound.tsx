import React from "react";

import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h1 className="display-1">ERORR 404</h1>
      <h2 className="display-6">Страница не найдена</h2>
      <LinkContainer to="/posts">
        <Nav.Link className="link-primary">
          Вернуться на главную страницу
        </Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default PageNotFound;
