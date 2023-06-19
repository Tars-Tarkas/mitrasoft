import { PayloadAction } from "@reduxjs/toolkit";
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../contstants";

import { initialStateType, CommentsType } from "../../types/types";

const initialState = {
  posts: [],
  comments: [],
  users: [],
  loadingPosts: false,
  loadingComments: false,
  loadingUsers: false,
  error: false,
} as initialStateType;

const PostsReducer = (
  state = initialState,
  { type, payload }: PayloadAction<any>
) => {
  switch (type) {
    case GET_POSTS:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: payload, loadingPosts: false };
      break;
    case GET_POSTS_ERROR:
      state = {
        ...state,
        error: true,
        loadingPosts: false,
      };
      break;

    case GET_COMMENTS:
      state = { ...state, loadingComments: true };
      break;
    case GET_COMMENTS_SUCCESS:
      state = {
        ...state,
        comments: [...state.comments, payload],
        loadingComments: false,
      };
      console.log(state.comments);

      break;
    case GET_COMMENTS_ERROR:
      state = { ...state, error: true, loadingComments: false };
      break;

    case GET_USER:
      state = { ...state, loadingUsers: true };
      break;
    case GET_USER_SUCCESS:
      state = { ...state, users: payload, loadingUsers: false };
      console.log(state);
      break;
    case GET_USER_ERROR:
      state = { ...state, error: true, loadingUsers: false };
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
};

export default PostsReducer;
