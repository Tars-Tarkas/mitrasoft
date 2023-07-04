import React from "react";

import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { CommentsType } from "../types/types";

const CommentsList = ({ id }: any) => {
  const { comments = [], loadingComments } = useSelector(
    (state: any) => state.PostsReducer
  );

  let commentsList;
  if (comments === null || loadingComments) {
    commentsList = (
      <tr>
        <td colSpan={2}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" size="sm" variant="primary" />
          </div>
        </td>
      </tr>
    );
  } else {
    if (comments.length > 0) {
      commentsList = comments
        .filter((item: CommentsType) => item.postId === id)
        .map((item: CommentsType, index: number) => {
          return (
            <tr key={index}>
              <td colSpan={1} className="fw-bold">
                {item.email}
              </td>
              <td colSpan={3} className="fst-italic">
                {item.body}
              </td>
            </tr>
          );
        });
    } else {
      commentsList = (
        <tr>
          <td colSpan={2} className="text-center">
            <h2>Комментарии не найдены</h2>
          </td>
        </tr>
      );
    }
  }

  return (
    <>{commentsList}</>
    // <tr>
    //   <td colSpan={1} className="fw-bold">
    //     {item.email}
    //   </td>
    //   <td colSpan={3} className="fst-italic">
    //     {item.body}
    //   </td>
    // </tr>
  );

  // {
  //   if(show = true) {

  //   },
  // };
};
export default CommentsList;
