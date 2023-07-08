import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CommentsList from "./CommetsList";
import Table from "react-bootstrap/Table";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/actionCreator";
import { PostsType, CommentsType } from "../types/types";
import { RootState } from "../redux/reducers/index";

const PostItem: React.FC<PostsType> = (posts): JSX.Element => {
  const { title, body, userId, id = 0 } = posts;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  let { comments = [] } = useSelector((state: RootState) => state.PostsReducer);

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
        <td className="d-none d-sm-table-cell">
          <Button
            variant={!show ? "primary" : "outline-primary"}
            onClick={setComments}
          >
            {!show ? "Показать комментарии" : "Скрыть комментарии"}
          </Button>
        </td>
      </tr>
      <tr className="d-sm-none d-sm-block text-center">
        <td colSpan={3} className="pb-3">
          <Button
            variant={!show ? "primary" : "outline-primary"}
            onClick={setComments}
          >
            {!show ? "Показать комментарии" : "Скрыть комментарии"}
          </Button>
        </td>
      </tr>
      {show && (
        <tr>
          <td colSpan={4} className="table-success">
            <Table striped bordered className="mb-7">
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

export default PostItem;
