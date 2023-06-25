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
  FILTER_BY_VALUE,
  GET_USER_COMMENTS,
  GET_USER_COMMENTS_SUCCESS,
  GET_USER_COMMENTS_ERROR,
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

export const getUsers = (id: any) => ({
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
export const getUsersComments = (email: any) => ({
  type: GET_USER_COMMENTS,
  payload: email,
});

export const getUsersCommentsSuccess = (userComments: CommentsType) => {
  return {
    type: GET_USER_COMMENTS_SUCCESS,
    payload: userComments,
  };
};
export const getUsersCommentsError = (error: boolean) => {
  return {
    type: GET_USER_COMMENTS_ERROR,
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

export const filterByValue = (value: string) => {
  return {
    type: FILTER_BY_VALUE,
    payload: value,
  };
};
