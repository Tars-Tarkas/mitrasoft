import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Card, Container, Button, Nav } from "react-bootstrap";
import { getComments } from "../redux/actions/actionCreator";

import { LinkContainer } from "react-router-bootstrap";

const Posts: React.FC = () => {
  const { posts, comments, loadingPosts, loadingComments } = useSelector(
    (state: any) => state.PostsReducer
  );

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        {loadingPosts ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          posts.map((item: any) => {
            return (
              <Card key={item.id} className="mb-3">
                <LinkContainer to={`/users/${item.userId}`}>
                  <Nav.Link>
                    <Card.Img
                      style={{ width: "6rem" }}
                      variant="top"
                      src={process.env.PUBLIC_URL + "/avatar.svg"}
                    />
                  </Nav.Link>
                </LinkContainer>

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(getComments(item.id))}
                  >
                    Показать комментарии
                  </Button>
                  <Card.Footer>
                    {loadingComments ? (
                      <div className="d-flex justify-content-center">
                        <Spinner
                          animation="border"
                          size="sm"
                          variant="primary"
                        />
                      </div>
                    ) : (
                      comments.map((item: any) => {
                        return <li key={item.id}>{item.email}</li>;
                      })
                    )}
                  </Card.Footer>
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
