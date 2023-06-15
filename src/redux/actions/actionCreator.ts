import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS,
} from "../contstants";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts: any) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsError = (error: boolean) => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
export const getComments = (postId: number) => ({
  type: GET_COMMENTS,
  payload: postId,
});

export const getCommentsSuccess = (comments: any) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const getCommentsError = (error: boolean) => {
  return {
    type: GET_COMMENTS_ERROR,
    payload: error,
  };
};
