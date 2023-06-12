import { SET_FETCH_DATA } from "../contstants";

const initialState = {
  data: [],
};

const setFetch = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_FETCH_DATA:
      return {
        ...state,
        data: [state.data, ...payload],
      };
    default:
      return state;
  }
};

export default setFetch;
