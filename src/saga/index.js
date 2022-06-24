import { put, takeEvery, all, call } from "redux-saga/effects";
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

console.log(call(delay, 1000)); // returns a plain object

export function* incrementAsync() {
  //yield delay(1000);
  /*We use the "call" effect to run the delay fn, to make it more testeable
  since call returns a plain object. And is more easy to make assertions on it*/
  yield call(delay, 1000);
  yield put({ type: "INCREASE_COUNTER" });
}

function* watchIncrementAsync() {
  /*takeEvery will create and run a new generator from "incrementAsync" every time "INCREASE_COUNTER_ASYNC" 
  is dispatched */
  yield takeEvery("INCREASE_COUNTER_ASYNC", incrementAsync);
}
export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
