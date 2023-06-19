import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/actionCreator";
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
      <Posts />
    </>
  );
};

export default PostList;
