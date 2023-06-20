import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { getPosts } from "../redux/actions/actionCreator";
import Posts from "../components/Posts";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import PaginationPosts from "../components/PaginationPosts";
type PostListType = {
  title: string;
};

const PostList = ({ title }: PostListType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(page, 10));
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  });
  const { posts = [], loadingPosts } = useSelector(
    (state: any) => state.PostsReducer
  );

  const [page, setPage] = useState(1);

  let postsList;
  if (posts.length > 0) {
    postsList = posts.map((item: any) => <Posts {...item} key={item.id} />);
  } else {
    postsList = (
      <tr>
        <td>
          <h2>No posts</h2>
        </td>
      </tr>
    );
  }

  const totalPage = 10;
  console.log(totalPage);

  const handleChangePage = useCallback(
    (page: any) => {
      setPage(page);
      dispatch(getPosts(page, 10));
    },
    [dispatch]
  );

  return (
    <Container>
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
