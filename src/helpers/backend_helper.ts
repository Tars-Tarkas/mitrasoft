import { get } from "./api_helper";
import * as url from "./url_helper";

export const getPosts = () => get(url.GET_POSTS, { params: { _limit: 10 } });

export const getPostComments = (postId: number) =>
  get(url.GET_POST_COMMENTS, { params: { postId } });

export const getUser = (id: number) => get(url.GET_USER, { params: { id } });
