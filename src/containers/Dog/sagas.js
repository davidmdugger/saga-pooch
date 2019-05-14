import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { actionCreators } from "./actions";

const apiCalls = {
  fetchDog: () => axios.get("https://dog.ceo/api/breeds/image/random")
};

// watcher
export default function* watcherSaga() {
  console.log("watcher hit");
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  console.log("worker hit");
  try {
    // make the api call
    const response = yield call(apiCalls.fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put(actionCreators.fetchDogSuccess(dog));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(actionCreators.fetchDogFail("Shit, bro!"));
  }
}
