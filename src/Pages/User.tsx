import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../redux/actions/actionCreator";
import { useDispatch } from "react-redux";

const User = () => {
  const { users = [], loadingUsers } = useSelector(
    (state: any) => state.PostsReducer
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(getUsers(params.id));
  }, [params.id]);

  return (
    <>
      <Container>
        {loadingUsers ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          users?.map((item: any) => {
            return <li key={item.id}>{item.name}</li>;
          })
        )}

        <Button variant="outline-secondary" onClick={() => navigate("/")}>
          Назад
        </Button>
      </Container>
    </>
  );
};

export default User;