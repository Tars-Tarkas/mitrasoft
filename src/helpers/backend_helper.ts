import { get } from "./api_helper";
import * as url from "./url_helper";

export const getPosts = () => get(url.GET_POSTS, { params: { _limit: 10 } });
