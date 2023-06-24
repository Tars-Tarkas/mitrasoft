import * as React from "react";
import { useEffect, useState } from "react";
import { getPosts } from "../redux/actions/actionCreator";
import Posts from "../components/Posts";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import PaginationPosts from "../components/PaginationPosts";
import SearchFilter from "../components/SearchFilter";
import { useSearchParams } from "react-router-dom";
import { PostsType } from "../types/types";

type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("search") || "";

  const dispatch = useDispatch();

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  });

  const { posts = [], loadingPosts } = useSelector(
    (state: any) => state.PostsReducer
  );

  let postsList;
  if (posts.length > 0) {
    postsList = posts
      .filter((post: PostsType) => post.title.includes(postQuery))
      .slice(firstPostIndex, lastPostIndex)
      .map((item: PostsType) => <Posts {...item} key={item.id} />);
  } else {
    postsList = (
      <tr>
        <td>
          <h2>Нет постов</h2>
        </td>
      </tr>
    );
  }

  const postsLength = posts.filter((post: PostsType) =>
    post.title.includes(postQuery)
  ).length;

  return (
    <Container>
      <SearchFilter setSearchParams={setSearchParams} postQuery={postQuery} />
      {posts === null || loadingPosts ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered>
          <thead>
            <tr>
              <th className="table-primary"></th>
              <th className="table-primary">Заголовок</th>
              <th className="table-primary">Текст поста</th>
              <th className="table-primary">Комментарии</th>
            </tr>
          </thead>
          <tbody>{postsList}</tbody>
        </Table>
      )}
      <PaginationPosts
        currentPage={currentPage}
        totalPage={postsLength}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default PostList;
