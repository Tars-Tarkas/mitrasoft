import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Button, Nav } from "react-bootstrap";
import { getComments } from "../redux/actions/actionCreator";
import { LinkContainer } from "react-router-bootstrap";
import CommentsList from "./CommetsList";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

import { PostsType } from "../types/types";

const Posts = (posts: PostsType) => {
  const { title, body, userId, id } = posts;

  const { comments, loadingComments } = useSelector(
    (state: any) => state.PostsReducer
  );

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const setComments = (id: any) => {
    dispatch(getComments(id));
    setShow(!show);
  };

  let commentsList;
  if (comments === null || loadingComments) {
    commentsList = (
      <tr>
        <td colSpan={2}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" size="sm" variant="primary" />
          </div>
        </td>
      </tr>
    );
  } else {
    if (comments.length > 0) {
      commentsList = comments
        .filter((item: any) => item.postId === id)
        .map((item: any, index: number) => {
          return <CommentsList {...item} key={index} />;
        });
    } else {
      commentsList = (
        <tr>
          <td colSpan={2}>
            <h2>No comments</h2>
          </td>
        </tr>
      );
    }
  }

  return (
    <>
      <tr>
        <td>
          <LinkContainer to={`/users/${userId}`}>
            <Nav.Link>
              <Image
                src={process.env.PUBLIC_URL + "/avatar.svg"}
                rounded
                style={{ width: "4rem" }}
              />
            </Nav.Link>
          </LinkContainer>
        </td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          <Button
            variant={!show ? "primary" : "outline-primary"}
            onClick={() => setComments(id)}
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
              <tbody>{commentsList}</tbody>
            </Table>
          </td>
        </tr>
      )}
    </>
  );
};

export default Posts;
