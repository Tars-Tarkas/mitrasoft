import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UsersType } from "../types/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersComments } from "../redux/actions/actionCreator";

const UserDetails = (item: UsersType) => {
  const { address, company, email, name, phone, username } = item;
  const dispatch = useDispatch();
  const { userComments = [] } = useSelector((state: any) => state.PostsReducer);
  useEffect(() => {
    dispatch(getUsersComments(email));
  }, [dispatch, email]);

  return (
    <Card>
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
      <Card.Footer>{userComments.id}</Card.Footer>
    </Card>
  );
};

export default UserDetails;
