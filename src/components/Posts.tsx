import React from "react";
import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CommentsList from "./CommetsList";
import Table from "react-bootstrap/Table";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../redux/actions/actionCreator";
import { PostsType } from "../types/types";

const Posts = (posts: PostsType) => {
  const { title, body, userId, id = 0 } = posts;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { comments = [] } = useSelector((state: any) => state.PostsReducer);
  console.log(comments);

  const setComments = () => {
    let comarr = comments.some((item: any) => item.postId === id);
    if (!comarr) {
      dispatch(getComments(id));
    }
    setShow(!show);
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
