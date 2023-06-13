import { put, call, takeLatest } from "redux-saga/effects";
// import { fetchPosts } from "../../api/index";
import { GET_POSTS } from "../contstants";
import { getPostsError, getPostsSuccess } from "../actions/actionCreator";
import { getPosts } from "../../helpers/backend_helper";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

function* workerSaga(): any {
  try {
    yield delay(2);
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsError(error.response));
  }
}

function* watchSaga() {
  yield takeLatest(GET_POSTS, workerSaga);
}

export default function* rootSaga() {
  yield watchSaga();
}
