import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_COMMENTS,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SORT_POSTS_ASC,
  SORT_POSTS_DESC,
  GET_USER_POSTS,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_ERROR,
  GET_SEARCH,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_ERROR,
} from "../contstants";

import { PostsType, CommentsType, UsersType } from "../../types/types";

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts: PostsType) => {
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

export const getCommentsSuccess = (comments: CommentsType) => {
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

export const getUsers = (id: undefined | string) => ({
  type: GET_USER,
  payload: id,
});

export const getUsersSuccess = (users: UsersType) => {
  return {
    type: GET_USER_SUCCESS,
    payload: users,
  };
};
export const getUsersError = (error: boolean) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};
export const getUsersPosts = (userId: undefined | string) => ({
  type: GET_USER_POSTS,
  payload: userId,
});

export const getUsersPostsSuccess = (userComments: CommentsType) => {
  return {
    type: GET_USER_POSTS_SUCCESS,
    payload: userComments,
  };
};
export const getUsersPostsError = (error: boolean) => {
  return {
    type: GET_USER_POSTS_ERROR,
    payload: error,
  };
};

export const sortPostsAsc = (column: string) => {
  return {
    type: SORT_POSTS_ASC,
    payload: column,
  };
};

export const sortPostsDesc = (column: string) => {
  return {
    type: SORT_POSTS_DESC,
    payload: column,
  };
};

export const getSearch = (search: string) => {
  return {
    type: GET_SEARCH,
    payload: search,
  };
};

export const getSearchSuccess = (posts: PostsType) => {
  return {
    type: GET_SEARCH_SUCCESS,
    payload: posts,
  };
};
export const getSearchError = (error: boolean) => {
  return {
    type: GET_SEARCH_ERROR,
    payload: error,
  };
};
