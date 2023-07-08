import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getUsers, getUsersPosts } from "../redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import CardUser from "../components/CardUser";
import PostsList from "../components/PostsList";

const User: React.FC = (): JSX.Element => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(getUsers(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(getUsersPosts(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Button
        variant="outline-secondary mb-3"
        onClick={() => navigate("/", { replace: true })}
      >
        Назад
      </Button>
      <h2 className="display-6 mb-3">Карточка пользователя</h2>
      <CardUser />
      <h2 className="display-6 mb-3">Все посты пользователя</h2>
      <PostsList />
    </>
  );
};

export default User;
