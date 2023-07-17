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
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_ERROR,
  GET_SEARCH,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_ERROR,
  GET_USER_POSTS,
} from "../contstants";

import { initialStateType, PostsType, CommentsType } from "../../types/types";

const initialState = {
  posts: [],
  comments: [],
  users: [],
  query: "",
  loadingPosts: false,
  loadingComments: false,
  loadingUsers: false,
  loadingUsersPost: false,
  error: "",
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
        posts: payload,
        loadingPosts: false,
      };
      break;
    case GET_POSTS_ERROR:
      state = {
        ...state,
        error: payload,
        loadingPosts: false,
      };
      break;

    case GET_COMMENTS:
      state = { ...state, loadingComments: true };
      break;
    case GET_COMMENTS_SUCCESS:
      let checkarray = state.comments.some(
        (item: CommentsType) => item.postId === payload.indexOf(item.postId)
      );
      if (!checkarray) {
        state = {
          ...state,
          comments: [...state.comments, ...payload],
          loadingComments: false,
        };
      } else {
        state = {
          ...state,
          comments: payload,
          loadingComments: false,
        };
      }
      break;
    case GET_COMMENTS_ERROR:
      state = { ...state, error: payload, loadingComments: false };
      break;

    case GET_USER:
      state = { ...state, loadingUsers: true };
      break;
    case GET_USER_SUCCESS:
      state = { ...state, users: payload, loadingUsers: false };

      break;
    case GET_USER_ERROR:
      state = { ...state, error: payload, loadingUsers: false };
      break;

    case GET_USER_POSTS:
      state = { ...state, loadingUsersPost: true };
      break;
    case GET_USER_POSTS_SUCCESS:
      state = { ...state, posts: payload, loadingUsersPost: false };
      break;
    case GET_USER_POSTS_ERROR:
      state = { ...state, error: payload, loadingUsersPost: false };
      break;

    case SORT_POSTS_ASC:
      const sortByKeyAsc = (key: number) => (a: any, b: any) =>
        a[key] > b[key] ? 1 : -1;
      const sortedAsc = state.posts.slice().sort(sortByKeyAsc(payload));
      state = { ...state, posts: sortedAsc };
      break;

    case SORT_POSTS_DESC:
      const sortByKeyDesc = (key: number) => (a: any, b: any) =>
        a[key] < b[key] ? 1 : -1;
      const sortedDesc = state.posts.slice().sort(sortByKeyDesc(payload));
      state = { ...state, posts: sortedDesc };
      break;

    case GET_SEARCH:
      state = {
        ...state,
        query: payload,
        loadingPosts: true,
      };
      break;
    case GET_SEARCH_SUCCESS:
      let newstate = payload.filter((v: PostsType) => {
        return v.title.toLowerCase().includes(state.query);
      });
      state = {
        ...state,
        posts: newstate,
        loadingPosts: false,
      };
      break;
    case GET_SEARCH_ERROR:
      state = {
        ...state,
        error: payload,
        loadingPosts: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }

  return state;
};

export default PostsReducer;
