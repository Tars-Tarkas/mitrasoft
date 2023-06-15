import { put, call, takeLatest, all, fork } from "redux-saga/effects";

import { GET_POSTS, GET_COMMENTS } from "../contstants";
import {
  getPostsError,
  getPostsSuccess,
  getCommentsError,
  getCommentsSuccess,
} from "../actions/actionCreator";

import { getPosts, getPostComments } from "../../helpers/backend_helper";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

function* onGetPosts(): any {
  try {
    yield delay(0);
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

function* watchSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_COMMENTS, onGetComments);
}

export default function* rootSaga() {
  // yield all([fork(watchSaga)]);
  yield all([call(watchSaga)]);
  // yield watchSaga();
}
