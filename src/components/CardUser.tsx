import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { UsersType } from "../types/types";
import { RootState } from "../redux/reducers/index";

const CardUser: React.FC = (): JSX.Element => {
  let { users = [], loadingUsers } = useSelector(
    (state: RootState) => state.PostsReducer
  );

  return (
    <>
      {loadingUsers ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        users.map((item: UsersType) => {
          const { id, address, company, email, name, phone, username } = item;
          return (
            <Card key={id} className="mb-5">
              <Card.Header className="bg-primary text-white p-3">
                <Row>
                  <Col md="auto" className="d-flex justify-content-center">
                    <i
                      className="bi bi-person-circle"
                      style={{ fontSize: "5rem", color: "white" }}
                    />
                  </Col>
                  <Col className="d-flex align-items-center text-center">
                    <Card.Title className="display-6 ">
                      {name} {username}
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Header>

              <Row className="p-3">
                <Col>
                  <ListGroup className="list-group-flush m-2 fw-bold">
                    Contacts
                    <ListGroup.Item className="fw-normal">
                      Phone: {phone}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      Email: {email}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="list-group-flush fw-bold">
                    Company
                    <ListGroup.Item className="fw-normal">
                      Company Name: {company.name}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      CatchPhrase: {company.catchPhrase}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      BS: {company.bs}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup className="list-group-flush m-2 fw-bold">
                    Adress
                    <ListGroup.Item className="fw-normal">
                      ZipCode: {address.zipcode}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      City: {address.city}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      Street: {address.street}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      Suite: {address.suite}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="list-group-flush m-2 fw-bold">
                    Geo
                    <ListGroup.Item className="fw-normal">
                      Lat: {address.geo.lat}
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal">
                      Lng: {address.geo.lng}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card>
          );
        })
      )}
    </>
  );
};

export default CardUser;
