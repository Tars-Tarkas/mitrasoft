import React from "react";
import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CommentsList from "./CommetsList";
import Table from "react-bootstrap/Table";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/actionCreator";
import { PostsType, CommentsType } from "../types/types";

const Posts = (posts: PostsType) => {
  const { title, body, userId, id = 0 } = posts;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  let { comments = [] } = useSelector((state: any) => state.PostsReducer);

  const setComments = () => {
    let checkarray = comments.some((item: CommentsType) => item.postId === id);
    if (!checkarray) {
      dispatch(getComments(id));
    }
    setShow((show) => !show);
  };

  return (
    <>
      <tr>
        <td>
          <LinkContainer to={`/users/${userId}`}>
            <Nav.Link>
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "3rem", color: "cornflowerblue" }}
              />
            </Nav.Link>
          </LinkContainer>
        </td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          <Button
            variant={!show ? "primary" : "outline-primary"}
            onClick={() => setComments()}
          >
            {!show ? "Показать комментарии" : "Скрыть комментарии"}
          </Button>
        </td>
      </tr>
      {show && (
        <tr>
          <td colSpan={4}>
            <Table striped bordered className="mb-3">
              <thead className="table-dark">
                <tr>
                  <th className="col-sm-2">Email</th>
                  <th>Текст комментария</th>
                </tr>
              </thead>
              <tbody>
                <CommentsList id={id} />
              </tbody>
            </Table>
          </td>
        </tr>
      )}
    </>
  );
};

export default Posts;
