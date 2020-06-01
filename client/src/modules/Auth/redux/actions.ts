import * as actionTypes from './actionTypes';
import { IAuth } from '../interfaces';

export interface VerifyAuthAction {
  type: typeof actionTypes.VERIFY_AUTH;
}

export interface UpdateAuthAction {
  type: typeof actionTypes.UPDATE_AUTH;
  payload: { data: IAuth };
}

export interface SetAuthAction {
  type: typeof actionTypes.SET_AUTH;
  payload: { data: IAuth };
}

export function checkAuth(): VerifyAuthAction {
  return {
    type: actionTypes.VERIFY_AUTH,
  };
}

export function updateAuth(auth: IAuth): UpdateAuthAction {
  return {
    type: actionTypes.UPDATE_AUTH,
    payload: { data: auth },
  };
}

export function setAuthInState(auth: IAuth): SetAuthAction {
  return {
    type: actionTypes.SET_AUTH,
    payload: { data: auth },
  };
}

export type AuthAction = VerifyAuthAction | UpdateAuthAction | SetAuthAction;
