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
  GET_SEARCH,
} from "../contstants";

import { PostsType, CommentsType } from "../../types/types";

export const getPosts = (_page: any, _limit: any, _search: any) => ({
  type: GET_POSTS,
  payload: _page,
  _limit,
  _search,
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

export const getUsersSuccess = (users: any) => {
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
export const getSearch = (value: string) => {
  return {
    type: GET_SEARCH,
    payload: value,
  };
};
