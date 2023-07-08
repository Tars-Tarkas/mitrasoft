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
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <i
                    className="bi bi-person-circle"
                    style={{ fontSize: "5rem", color: "cornflowerblue" }}
                  />
                </Col>
                <Col>
                  <Card.Title>
                    {name} {username}
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ListGroup>
                    <ListGroup.Item>Phone: {phone}</ListGroup.Item>
                    <ListGroup.Item>Email: {email}</ListGroup.Item>
                    <ListGroup>
                      Company
                      <ListGroup.Item>
                        Company Name: {company.name}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        CatchPhrase: {company.catchPhrase}
                      </ListGroup.Item>
                      <ListGroup.Item>BS: {company.bs}</ListGroup.Item>
                    </ListGroup>
                  </ListGroup>
                </Col>
                <Col>
                  <ListGroup>
                    Adress
                    <ListGroup.Item>ZipCode: {address.zipcode}</ListGroup.Item>
                    <ListGroup.Item>City: {address.city}</ListGroup.Item>
                    <ListGroup.Item>Street: {address.street}</ListGroup.Item>
                    <ListGroup.Item>Suite: {address.suite}</ListGroup.Item>
                    <ListGroup>
                      Geo
                      <ListGroup.Item>Lat: {address.geo.lat}</ListGroup.Item>
                      <ListGroup.Item>Lng: {address.geo.lng}</ListGroup.Item>
                    </ListGroup>
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
