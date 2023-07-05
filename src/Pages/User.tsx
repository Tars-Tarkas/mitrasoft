import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import UserDetails from "../components/UserDetails";

const User = () => {
  const { users = [], loadingUsers } = useSelector(
    (state: any) => state.PostsReducer
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(getUsers(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Button
        variant="outline-secondary mb-3"
        onClick={() => navigate("/", { replace: true })}
      >
        Назад
      </Button>
      {loadingUsers ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        users?.map((item: any) => {
          return <UserDetails {...item} key={item.id} />;
        })
      )}
    </>
  );
};

export default User;
