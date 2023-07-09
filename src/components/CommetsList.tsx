import React from "react";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { CommentsType } from "../types/types";
import { RootState } from "../redux/reducers/index";

type CommentsListProps = {
  id: number;
};

const CommentsList: React.FC<CommentsListProps> = ({ id }): JSX.Element => {
  let { comments = [], loadingComments } = useSelector(
    (state: RootState) => state.PostsReducer
  );

  let checkarray = comments.some((item: CommentsType) => item.postId === id);

  let commentsList;
  if (!checkarray && comments && loadingComments) {
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
        .map((item: CommentsType) => {
          const { id, email, body } = item;
          return (
            <tr key={id}>
              <td colSpan={1} className="fw-bold fs-6">
                {email}
              </td>
              <td colSpan={3} className="fst-italic">
                {body}
              </td>
            </tr>
          );
        });
    } else {
      commentsList = (
        <tr>
          <td colSpan={2} className="text-center">
            <h4>Комментарии не найдены</h4>
          </td>
        </tr>
      );
    }
  }

  return <>{commentsList}</>;
};
export default CommentsList;
