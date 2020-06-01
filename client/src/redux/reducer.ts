import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";

import PostReducer, { initialPostState } from "modules/Post/redux/reducer";
import AccountReducer from "modules/Auth/redux/reducer";
import { initialAccountState } from "modules/Account/store/initialAccountState";

import AuthReducer from "modules/Auth/redux/reducer";
import { initialAuth } from "modules/Auth/store/initialAuth";

export const initialState = {
  post: initialPostState,
  account: initialAccountState,
  router: {},
  authInfo: initialAuth
};

const reducer = (history: History<History.PoorMansUnknown>): any =>
  combineReducers({
    post: PostReducer,
    router: connectRouter(history),
    account: AccountReducer,
    authInfo: AuthReducer
  });

export default reducer;
