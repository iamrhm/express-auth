import { all } from "redux-saga/effects";

import postSagas from "modules/Post/redux/sagas";
import accountSagas from "modules/Account/redux/sagas";
import exposedSagas from "modules/Exposed/redux/sagas";
import authSagas from "modules/Auth/redux/sagas";

function* mainSaga(): any {
  yield all([postSagas(), accountSagas(), exposedSagas(), authSagas()]);
}

export default mainSaga;
