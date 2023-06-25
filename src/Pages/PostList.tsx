import * as React from "react";
import { useEffect, useState } from "react";
import {
  getPosts,
  sortPostsAsc,
  sortPostsDesc,
} from "../redux/actions/actionCreator";
import Posts from "../components/Posts";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import PaginationPosts from "../components/PaginationPosts";
import SearchFilter from "../components/SearchFilter";
import { PostsType } from "../types/types";
import "bootstrap-icons/font/bootstrap-icons.css";

type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [sortPosts, setSortPosts] = useState(false);

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
      .slice(firstPostIndex, lastPostIndex)
      .map((item: PostsType) => <Posts {...item} key={item.id} />);
  } else {
    postsList = (
      <tr>
        <td colSpan={4} className="text-center">
          <h2>Нет постов</h2>
        </td>
      </tr>
    );
  }

  const sortColumn = () => {
    sortPosts
      ? dispatch(sortPostsAsc("title"))
      : dispatch(sortPostsDesc("title"));
    setSortPosts(!sortPosts);
  };

  let sortIcon = !sortPosts ? (
    <i className="bi bi-caret-down-fill"></i>
  ) : (
    <i className="bi bi-caret-up-fill"></i>
  );

  return (
    <Container>
      <SearchFilter />
      {posts === null || loadingPosts ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered>
          <thead>
            <tr>
              <th className="table-primary"></th>
              <th
                role="button"
                className="table-primary d-flex justify-content-between "
                onClick={sortColumn}
              >
                Заголовок{sortIcon}
              </th>
              <th className="table-primary col-7">Текст поста</th>
              <th className="table-primary col-2">Комментарии</th>
            </tr>
          </thead>
          <tbody>{postsList}</tbody>
        </Table>
      )}
      <PaginationPosts
        currentPage={currentPage}
        totalPage={posts.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default PostList;
