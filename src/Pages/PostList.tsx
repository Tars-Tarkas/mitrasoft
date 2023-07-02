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
import PaginationPosts from "../components/PaginationPosts";
import SearchFilter from "../components/SearchFilter";
import { PostsType } from "../types/types";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSearchParams } from "react-router-dom";

type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [sortPosts, setSortPosts] = useState(false);

  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const {
    posts = [],
    totalCount,
    loadingPosts,
    query,
  } = useSelector((state: any) => state.PostsReducer);

  useEffect(() => {
    setSearchParams({
      _page: currentPage.toString(),
      _limit: postPerPage.toString(),
      _search: query,
    });
    dispatch(getPosts(currentPage, postPerPage, query));
  }, [dispatch, currentPage, postPerPage, query, setSearchParams]);

  useEffect(() => {
    document.title = title;
  });

  let postsList;
  if (posts.length > 0) {
    postsList = posts.map((item: PostsType) => (
      <Posts {...item} key={item.id} />
    ));
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

  console.log(posts.length);

  return (
    <>
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
        totalPage={totalCount}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PostList;
