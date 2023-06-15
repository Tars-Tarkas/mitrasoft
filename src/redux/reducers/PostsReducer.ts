import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from "../contstants";

const initialState = {
  posts: [],
  comments: [],
  loadingPosts: false,
  loadingComments: false,
  error: false,
};

const PostsReducer = (state = initialState, { type, payload }: any) => {
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
      state = { ...state, comments: payload, loadingComments: false };
      break;
    case GET_COMMENTS_ERROR:
      state = { ...state, error: true, loadingComments: false };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostsReducer;
