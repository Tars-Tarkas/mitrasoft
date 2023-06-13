import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_SUCCESS } from "../contstants";

const initialState = {
  posts: [],
  loadPosts: false,
  loadPostDetails: false,
  error: false,
};

const PostsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case GET_POSTS:
      state = { ...state, loadPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: payload, loadPosts: false };
      break;
    case GET_POSTS_ERROR:
      state = {
        ...state,
        error: true,
        loadPosts: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostsReducer;
