import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/actionCreator";

import Posts from "../components/Posts";

const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Posts />
    </>
  );
};

export default PostList;
