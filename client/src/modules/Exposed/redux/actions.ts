import * as actionTypes from "./actionTypes";
import { UserLoginRequest, UserRegistrationRequest } from "../interfaces";

export interface UserLoginAction {
  type: typeof actionTypes.USER_LOGIN;
  payload: { loginReq: UserLoginRequest };
}

export interface UserRegistrationAction {
  type: typeof actionTypes.USER_REGISTRATION;
  payload: { registrationReq: UserRegistrationRequest };
}

export function loginUser(loginReq: UserLoginRequest): UserLoginAction {
  return {
    type: actionTypes.USER_LOGIN,
    payload: { loginReq }
  };
}

export function registerUser(
  registrationReq: UserRegistrationRequest
): UserRegistrationAction {
  return {
    type: actionTypes.USER_REGISTRATION,
    payload: { registrationReq }
  };
}
