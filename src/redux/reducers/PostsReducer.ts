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
  SORT_POSTS_ASC,
  SORT_POSTS_DESC,
  GET_USER_COMMENTS,
  GET_USER_COMMENTS_SUCCESS,
  GET_USER_COMMENTS_ERROR,
  GET_SEARCH,
} from "../contstants";

import { initialStateType, PostsType } from "../../types/types";

const initialState = {
  posts: [],
  comments: [],
  users: [],
  query: "",
  totalCount: 0,
  userComments: [],
  loadingPosts: false,
  loadingComments: false,
  loadingUsers: false,
  loadingUserCommets: false,
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
      state = {
        ...state,
        posts: payload.data.filter((v: PostsType) => {
          return v.title.toLowerCase().includes(state.query);
        }),
        totalCount: payload.headers["x-total-count"],
        loadingPosts: false,
      };
      break;
    case GET_POSTS_ERROR:
      state = {
        ...state,
        error: true,
        loadingPosts: false,
      };
      break;

    case GET_COMMENTS:
      const inComments = state.comments.find((item) =>
        item.id === payload.id ? true : false
      );
      if (!inComments) state = { ...state, loadingComments: true };
      else state.comments.push(payload);
      console.log(state.comments);

      break;
    case GET_COMMENTS_SUCCESS:
      state = {
        ...state,
        comments: [...state.comments, ...payload.data],
        loadingComments: false,
      };
      break;
    case GET_COMMENTS_ERROR:
      state = { ...state, error: true, loadingComments: false };
      break;

    case GET_USER:
      state = { ...state, loadingUsers: true };
      break;
    case GET_USER_SUCCESS:
      state = { ...state, users: payload.data, loadingUsers: false };
      break;
    case GET_USER_ERROR:
      state = { ...state, error: true, loadingUsers: false };
      break;

    case GET_USER_COMMENTS:
      state = { ...state, loadingUserCommets: true };
      break;
    case GET_USER_COMMENTS_SUCCESS:
      state = { ...state, userComments: payload, loadingUserCommets: false };
      break;
    case GET_USER_COMMENTS_ERROR:
      state = { ...state, error: true, loadingUserCommets: false };
      break;

    case SORT_POSTS_ASC:
      const sortByKeyAsc = (key: any) => (a: any, b: any) =>
        a[key] > b[key] ? 1 : -1;
      const sortedAsc = state.posts.slice().sort(sortByKeyAsc(payload));
      state = { ...state, posts: sortedAsc };
      break;

    case SORT_POSTS_DESC:
      const sortByKeyDesc = (key: any) => (a: any, b: any) =>
        a[key] < b[key] ? 1 : -1;
      const sortedDesc = state.posts.slice().sort(sortByKeyDesc(payload));
      state = { ...state, posts: sortedDesc };
      break;

    case GET_SEARCH:
      state = {
        ...state,
        query: payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default PostsReducer;
