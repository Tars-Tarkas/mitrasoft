import React from "react";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Card, Container, Button } from "react-bootstrap";
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
              <Card key={item.id} className="mb-3">
                <Card.Img
                  style={{ width: "6rem" }}
                  variant="top"
                  src={process.env.PUBLIC_URL + "/avatar.svg"}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                  <Button variant="primary">Показать комментарии</Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </Container>
    </>
  );
};

export default Posts;
