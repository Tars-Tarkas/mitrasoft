import React, { useEffect } from "react";
import PostsList from "../components/PostsList";

import SearchFilter from "../components/SearchFilter";

type PostsType = {
  title: string;
};

const Posts: React.FC<PostsType> = ({ title }): JSX.Element => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <>
      <SearchFilter />
      <PostsList />
    </>
  );
};

export default Posts;
