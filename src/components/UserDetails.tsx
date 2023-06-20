import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UsersType } from "../types/types";

const UserDetails = (item: UsersType) => {
  const { address, company, email, name, phone, username } = item;
  return (
    <Card>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card.Img
            src={process.env.PUBLIC_URL + "/avatar.svg"}
            style={{ width: "6rem" }}
          ></Card.Img>
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
              <ListGroup.Item>Company Name: {company.name}</ListGroup.Item>
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
};

export default UserDetails;
