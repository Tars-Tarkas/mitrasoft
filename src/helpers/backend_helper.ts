import { get } from "./api_helper";
import * as url from "./url_helper";

export const getPosts = (_page: number, _limit: number, _search: string) =>
  get(url.GET_POSTS, { params: { _page, _limit, _search } });

export const getPostComments = (postId: number) =>
  get(url.GET_POST_COMMENTS, { params: { postId } });

export const getUser = (id: number) => get(url.GET_USER, { params: { id } });

export const getSearchPosts = (_search: string) =>
  get(url.GET_SEARCH, { params: { _search } });
