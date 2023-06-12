import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchData } from "../redux/actions/actionCreator";
import Spinner from "react-bootstrap/Spinner";

const PostList = () => {
  const { data } = useSelector((state: any) => state?.setFetch);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchData());
  }, [dispatch]);

  // if (!data || data.lenght === 0) return <Spinner />;
  return (
    <>
      {!data || data.lenght === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        data.map((item: any, index: any) => {
          return <li key={index}>{item.body}</li>;
        })
      )}
    </>
  );
};

export default PostList;
