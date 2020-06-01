import { call, put, ForkEffect, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import { UserLoginAction, UserRegistrationAction } from "./actions";
import { verifyUserLogin, verifyUserRegistration } from "../apis";

import { updateAuth } from "modules/Auth/redux/actions";

function* performLogin(action: UserLoginAction): any {
  try {
    const { email, password } = action.payload.loginReq;
    const authResponse = yield call(verifyUserLogin, email, password);
    if (authResponse.data.accessToken && authResponse.data.auth) {
      yield put(updateAuth(authResponse.data));
    }
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.log(err);
  }
}

function* performRegistration(action: UserRegistrationAction): any {
  try {
    const { registrationReq } = action.payload;
    const authResponse = yield call(verifyUserRegistration, registrationReq);
    if (authResponse.data.accessToken && authResponse.data.auth) {
      yield put(updateAuth(authResponse.data));
    }
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.log(err);
  }
}

function* exposedSagas(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.USER_LOGIN, performLogin);
  yield takeLatest(actionTypes.USER_REGISTRATION, performRegistration);
}

export default exposedSagas;
