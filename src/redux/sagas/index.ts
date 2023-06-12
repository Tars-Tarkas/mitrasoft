import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData } from "../../api/index";
import { GET_FETCH_DATA } from "../contstants";
import { setFetchData } from "../actions/actionCreator";

const delay = (time: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });

export function* workerSaga(): any {
  yield delay(2);
  const data = yield call(fetchData);
  yield put(setFetchData(data));
}

export function* watchSaga() {
  yield takeEvery(GET_FETCH_DATA, workerSaga);
}

export default function* rootSaga() {
  yield watchSaga();
}
