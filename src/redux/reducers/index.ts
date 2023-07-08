import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";

const reducer = combineReducers({
  PostsReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
