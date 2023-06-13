import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../contstants";

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
