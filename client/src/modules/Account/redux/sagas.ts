import { call, ForkEffect, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import {
  FetchAccountInfoAction,
  fetchingAccountInfo,
  populateAccountInfo
} from "./actions";
import { fetchAccountDetail } from "../apis";
import { getToken } from "modules/Auth/apis";

function* fetchAccountInfo(action: FetchAccountInfoAction): any {
  try {
    yield put(fetchingAccountInfo());
    const token = getToken();
    const accountInfo = yield call(fetchAccountDetail, token);
    yield put(
      populateAccountInfo({
        ...accountInfo.data,
        isLoading: false
      })
    );
  } catch (err) {
    throw new Error(err);
  }
}

function* accountSagas(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(actionTypes.FETCH_ACCOUNT_INFO, fetchAccountInfo);
}

export default accountSagas;
