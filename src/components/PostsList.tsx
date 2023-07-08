import React, { useEffect, useState } from "react";
import {
  getPosts,
  sortPostsAsc,
  sortPostsDesc,
} from "../redux/actions/actionCreator";
import PostsItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import PaginationPosts from "./PaginationPosts";
import { PostsType } from "../types/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RootState } from "../redux/reducers/index";

const PostsList: React.FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortPosts, setSortPosts] = useState(false);
  const [postPerPage] = useState(10);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const dispatch = useDispatch();

  const { posts, loadingPosts } = useSelector(
    (state: RootState) => state.PostsReducer
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let postsList;
  if (posts.length > 0) {
    postsList = posts
      .slice(firstPostIndex, lastPostIndex)
      .map((item: PostsType) => <PostsItem {...item} key={item.id} />);
  } else {
    postsList = (
      <tr>
        <td colSpan={4} className="text-center">
          <h4>Посты не найдены</h4>
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

  let sortIcon = sortPosts ? (
    <i className="bi bi-caret-down-fill"></i>
  ) : (
    <i className="bi bi-caret-up-fill"></i>
  );

  return (
    <>
      {posts === null || loadingPosts ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover responsive="sm">
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
              <th className="table-primary d-none d-sm-block">Комментарии</th>
            </tr>
          </thead>
          <tbody>{postsList}</tbody>
        </Table>
      )}
      {posts.length >= postPerPage && (
        <PaginationPosts
          currentPage={currentPage}
          totalPage={posts.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default PostsList;
