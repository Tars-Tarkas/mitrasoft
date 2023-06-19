import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container, Button, Nav } from "react-bootstrap";
import { getComments } from "../redux/actions/actionCreator";
import { LinkContainer } from "react-router-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const Posts = () => {
  const {
    posts = [],
    comments,
    loadingPosts,
    loadingComments,
  } = useSelector((state: any) => state.PostsReducer);

  const dispatch = useDispatch();

  const [showComments, setShowComments] = useState(false);

  const setComments = (item: any) => {
    dispatch(getComments(item.id));
    // setShowComments(!showComments);
  };

  return (
    <>
      <Container>
        {loadingPosts ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Table striped bordered>
            <thead>
              <tr>
                <th></th>
                <th>Заголовок</th>
                <th>Текст поста</th>
                <th>Комментарии</th>
              </tr>
            </thead>
            {posts.map((item: any) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>
                      <LinkContainer to={`/users/${item.userId}`}>
                        <Nav.Link>
                          <Image
                            src={process.env.PUBLIC_URL + "/avatar.svg"}
                            rounded
                            style={{ width: "4rem" }}
                          />
                        </Nav.Link>
                      </LinkContainer>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <Button
                        variant="primary"
                        // onClick={() => dispatch(getComments(item.id))}
                        onClick={() => setComments(item)}
                      >
                        Показать комментарии
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    {showComments && (
                      <td colSpan={4}>
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
                            return (
                              <div key={item.id}>
                                <p>{item.email}</p>
                                <p>{item.body}</p>
                              </div>
                            );
                          })
                        )}
                      </td>
                    )}
                  </tr>
                </tbody>
              );
            })}
          </Table>
        )}
      </Container>
    </>
  );
};

export default Posts;
