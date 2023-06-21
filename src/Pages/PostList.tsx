import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { getPosts } from "../redux/actions/actionCreator";
import Posts from "../components/Posts";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import PaginationPosts from "../components/PaginationPosts";
import SearchFilter from "../components/SearchFilter";
import { useSearchParams } from "react-router-dom";

type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("post") || "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(page, 10, postQuery));
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
      .filter((post: any) => post.title.includes(postQuery))
      .map((item: any) => <Posts {...item} key={item.id} />);
  } else {
    postsList = (
      <tr>
        <td>
          <h2>No posts</h2>
        </td>
      </tr>
    );
  }

  const totalPage = posts.length;

  const handleChangePage = useCallback(
    (page: any) => {
      setPage(page);
      dispatch(getPosts(page, 10, postQuery));
    },
    [dispatch]
  );

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
      {totalPage > 1 && (
        <PaginationPosts
          total={totalPage}
          current={page}
          onChangePage={handleChangePage}
        />
      )}
    </Container>
  );
};

export default PostList;
