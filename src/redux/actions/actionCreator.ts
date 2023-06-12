import { GET_FETCH_DATA, SET_FETCH_DATA } from "../contstants";

export const getFetchData = () => ({
  type: GET_FETCH_DATA,
});

export const setFetchData = (payload: any) => ({
  type: SET_FETCH_DATA,
  payload,
});
