import { put, call, takeLatest, fork, delay } from "redux-saga/effects";

import {
  GET_POSTS,
  GET_COMMENTS,
  GET_USER,
  GET_USER_POSTS,
  GET_SEARCH,
} from "../contstants";
import {
  getPostsError,
  getPostsSuccess,
  getCommentsError,
  getCommentsSuccess,
  getUsersSuccess,
  getUsersError,
  getUsersPostsSuccess,
  getUsersPostsError,
  getSearchSuccess,
  getSearchError,
} from "../actions/actionCreator";

import {
  getPosts,
  getPostComments,
  getUser,
  getUserPosts,
  getSearch,
} from "../../helpers/backend_helper";

// const delay = (time: number) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });

function* onGetPosts(): any {
  try {
    yield delay(1000);
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsError(error.message));
  }
}

function* onGetComments({ payload: postId }: any): any {
  try {
    yield delay(1000);
    const response = yield call(getPostComments, postId);
    yield put(getCommentsSuccess(response));
  } catch (error) {
    yield put(getCommentsError(error.message));
  }
}

function* onGetUsers({ payload: id }: any): any {
  try {
    yield delay(1000);
    const response = yield call(getUser, id);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersError(error.message));
  }
}

function* onGetUserPosts({ payload: userId }: any): any {
  try {
    yield delay(1000);
    const response = yield call(getUserPosts, userId);
    yield put(getUsersPostsSuccess(response));
  } catch (error) {
    yield put(getUsersPostsError(error.message));
  }
}

function* onGetSearch({ payload: search }: any): any {
  try {
    yield delay(1000);
    const response = yield call(getSearch, search);
    yield put(getSearchSuccess(response));
  } catch (error) {
    yield put(getSearchError(error.message));
  }
}

function* watchSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_COMMENTS, onGetComments);
  yield takeLatest(GET_USER, onGetUsers);
  yield takeLatest(GET_USER_POSTS, onGetUserPosts);
  yield takeLatest(GET_SEARCH, onGetSearch);
}

export default function* rootSaga() {
  yield fork(watchSaga);
}
