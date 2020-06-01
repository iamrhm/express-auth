import { ForkEffect, put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import {
  updateAuth,
  setAuthInState,
  VerifyAuthAction,
  UpdateAuthAction,
} from './actions';

import {
  getAuthFromLocalStorage,
  getAuth,
  setAuthInLocalStorage,
} from '../apis';

function* fetchAuth(action: VerifyAuthAction): any {
  try {
    let authInfo = getAuthFromLocalStorage();
    if (authInfo.auth) {
      const authRes = yield call(getAuth, authInfo.refreshToken);
      authInfo = { ...authInfo, ...authRes.data };
    }
    yield put(updateAuth(authInfo));
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.log(err);
  }
}

function* handleUpdateAuth(action: UpdateAuthAction): any {
  try {
    const auth = action.payload.data;
    setAuthInLocalStorage(auth);
    yield put(setAuthInState(auth));
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.log(err);
  }
}

function* authSagas(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.VERIFY_AUTH, fetchAuth);
  yield takeLatest(actionTypes.UPDATE_AUTH, handleUpdateAuth);
}

export default authSagas;
