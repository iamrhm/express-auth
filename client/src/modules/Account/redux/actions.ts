import * as actionTypes from "./actionTypes";
import { AccountState } from "../interfaces";

export interface FetchAccountInfoAction {
  type: typeof actionTypes.FETCH_ACCOUNT_INFO;
}

export interface FetchingAccountInfoAction {
  type: typeof actionTypes.FETCHING_ACCOUNT_INFO;
}

export interface PopulateAccountInfoAction {
  type: typeof actionTypes.POPULATE_ACCOUNT_INFO;
  payload: { data: AccountState };
}

export function fetchAccountInfo(): FetchAccountInfoAction {
  return {
    type: actionTypes.FETCH_ACCOUNT_INFO
  };
}

export function fetchingAccountInfo(): FetchingAccountInfoAction {
  return {
    type: actionTypes.FETCHING_ACCOUNT_INFO
  };
}

export function populateAccountInfo(
  data: AccountState
): PopulateAccountInfoAction {
  return {
    type: actionTypes.POPULATE_ACCOUNT_INFO,
    payload: { data }
  };
}

export type AccountAction =
  | FetchAccountInfoAction
  | FetchingAccountInfoAction
  | PopulateAccountInfoAction;
