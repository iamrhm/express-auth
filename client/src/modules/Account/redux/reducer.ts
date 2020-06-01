import { initialAccountState } from "../store/initialAccountState";
import { AccountAction } from "./actions";
import { AccountState } from "../interfaces";
import * as actionTypes from "./actionTypes";

export default (
  state: AccountState = initialAccountState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case actionTypes.FETCHING_ACCOUNT_INFO:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.POPULATE_ACCOUNT_INFO:
      return { ...state, ...action.payload.data };
    default:
      return state;
  }
};
