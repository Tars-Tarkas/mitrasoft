import { put, call, takeLatest, all } from "redux-saga/effects";

import { GET_POSTS, GET_COMMENTS, GET_USER } from "../contstants";
import {
  getPostsError,
  getPostsSuccess,
  getCommentsError,
  getCommentsSuccess,
  getUsersSuccess,
  getUsersError,
} from "../actions/actionCreator";

import {
  getPosts,
  getPostComments,
  getUser,
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

function* watchSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_COMMENTS, onGetComments);
  yield takeLatest(GET_USER, onGetUsers);
}

export default function* rootSaga() {
  // yield all([fork(watchSaga)]);
  yield all([call(watchSaga)]);
  // yield watchSaga();
}
