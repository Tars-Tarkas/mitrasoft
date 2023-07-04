import { put, call, takeLatest, all, fork } from "redux-saga/effects";

import {
  GET_POSTS,
  GET_COMMENTS,
  GET_USER,
  GET_USER_COMMENTS,
  GET_SEARCH,
} from "../contstants";
import {
  getPostsError,
  getPostsSuccess,
  getCommentsError,
  getCommentsSuccess,
  getUsersSuccess,
  getUsersError,
  getUsersCommentsSuccess,
  getUsersCommentsError,
  getSearchSuccess,
  getSearchError,
} from "../actions/actionCreator";

import {
  getPosts,
  getPostComments,
  getUser,
  getUserComments,
  getSearch,
} from "../../helpers/backend_helper";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

function* onGetPosts(): any {
  try {
    yield delay(1);
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsError(error.response));
  }
}

function* onGetComments({ payload: postId }: any): any {
  try {
    yield delay(2);
    const response = yield call(getPostComments, postId);
    yield put(getCommentsSuccess(response));
  } catch (error) {
    yield put(getCommentsError(error.response));
  }
}

function* onGetUsers({ payload: id }: any): any {
  try {
    yield delay(2);
    const response = yield call(getUser, id);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersError(error.response));
  }
}

function* onGetUserComments({ payload: email }: any): any {
  try {
    yield delay(1);
    const response = yield call(getUserComments, email);
    yield put(getUsersCommentsSuccess(response));
  } catch (error) {
    yield put(getUsersCommentsError(error.response));
  }
}

function* onGetSearch({ payload: search }: any): any {
  try {
    yield delay(1);
    const response = yield call(getSearch, search);
    yield put(getSearchSuccess(response));
  } catch (error) {
    yield put(getSearchError(error.response));
  }
}

function* watchSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_COMMENTS, onGetComments);
  yield takeLatest(GET_USER, onGetUsers);
  yield takeLatest(GET_USER_COMMENTS, onGetUserComments);
  yield takeLatest(GET_SEARCH, onGetSearch);
}

export default function* rootSaga() {
  yield all([fork(watchSaga)]);
  // yield all([call(watchSaga)]);
  // yield watchSaga();
}
