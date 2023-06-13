import React from "react";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Card, Container, Row, Col } from "react-bootstrap";
const Posts: React.FC = () => {
  const { posts, loadPosts } = useSelector((state: any) => state.PostsReducer);

  return (
    <>
      <Container>
        {loadPosts ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          posts.map((item: any) => {
            return (
              <Col key={item.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Container>
    </>
  );
};

export default Posts;
