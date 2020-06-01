import { Store as ReduxStore, Dispatch as ReduxDispatch, Reducer } from "redux";
import { History } from "history";
import { LocationChangeAction, RouterState } from "connected-react-router";

import { PostState } from "modules/Post/interfaces";
import { PostAction } from "modules/Post/redux/actions";

import { AccountState } from "modules/Account/interfaces";
import { AccountAction } from "modules/Account/redux/actions";

import { IAuth } from "modules/Auth/interfaces";
import { AuthAction } from "modules/Auth/redux/actions";

export interface State {
  post: PostState;
  router: Reducer<
    RouterState<History.PoorMansUnknown>,
    LocationChangeAction<History.PoorMansUnknown>
  >;
  account: AccountState;
  authInfo: IAuth;
}

export type Action = AccountAction | PostAction | AuthAction;

export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
