import React from "react";

const CommentsList = (item: any) => {
  return (
    <tr>
      <td colSpan={1}>{item.email}</td>
      <td colSpan={3}>{item.body}</td>
    </tr>
  );
};

export default CommentsList;
