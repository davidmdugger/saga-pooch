// import { takeLatest, call, put } from "redux-saga/effects";
// import axios from "axios";

// import { actionCreators, actionTypes } from "./actions";

// const apiCalls = {
//   fetchDog: () => axios.get("https://dog.ceo/api/breeds/image/random")
// };

// // watcher
// export function* watcherSaga() {
//   yield takeLatest(actionTypes.API_CALL_REQUEST, workerSaga);
// }

// // function that makes the api request and returns a Promise for response
// // function fetchDog() {
// //   return axios.get("https://dog.ceo/api/breeds/image/random");
// // }

// // worker saga: makes the api call when watcher saga sees the action
// function* workerSaga() {
//   try {
//     // make the api call
//     const response = yield call(apiCalls.fetchDog);
//     const dog = response.data.message;

//     // dispatch a success action to the store with the new dog
//     yield put(actionCreators.fetchDogSuccess(dog));
//   } catch (error) {
//     // dispatch a failure action to the store with the error
//     yield put(actionCreators.fetchDogFail("Shit, bro!"));
//   }
// }

import { all, fork } from "redux-saga/effects";
import watcherSaga from "./containers/Dog/sagas";

export default function* rootSaga() {
  yield all([fork(watcherSaga)]);
}
