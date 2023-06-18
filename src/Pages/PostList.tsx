import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/actionCreator";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Button } from "react-bootstrap";
import Posts from "../components/Posts";

type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username with two button addons"
          />
          <Button
            variant="outline-secondary"
            className="btn-close"
            aria-label="Close"
          />
          <Button variant="outline-secondary">Поиск</Button>
        </InputGroup>
      </Container>

      <Posts />
    </>
  );
};

export default PostList;
