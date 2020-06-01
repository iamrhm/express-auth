import React from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { loginUser, UserLoginAction } from "../../redux/actions";
import { UserLoginRequest } from "../../interfaces";

import { checkAuth, VerifyAuthAction } from "modules/Auth/redux/actions";

import { State } from "interfaces/redux";

import {
  Container,
  FormWrapper,
  FormGroup,
  FormControl,
  FormLabel,
  TextInput,
  PasswordInput,
  FormAction,
  ButtonInput,
} from "./styled";

const UPDATE_LOGIN_DATA: "UPDATE_LOGIN_DATA" = "UPDATE_LOGIN_DATA";

interface UpdateInputAction {
  type: typeof UPDATE_LOGIN_DATA;
  payload: { loginData: UserLoginRequest };
}

type IAction = UpdateInputAction;

interface IState {
  loginData: UserLoginRequest;
}

const initialState: IState = {
  loginData: { email: "", password: "" }
};

function reducer(state: IState, { type, payload }: IAction): IState {
  switch (type) {
    case "UPDATE_LOGIN_DATA":
      return { ...state, loginData: payload.loginData };
    default:
      return state;
  }
}

function isValid(key: string, value: any): boolean {
  return true;
}

const LoginPage: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(({ authInfo }: State): boolean => authInfo.auth);

  const [state, updateState] = React.useReducer(reducer, initialState);

  const performLogin = React.useCallback((): UserLoginAction => {
    return dispatch(loginUser({ ...state.loginData }));
  }, [dispatch]);

  const verifyAuth = React.useCallback((): VerifyAuthAction => {
    return dispatch(checkAuth());
  }, [dispatch]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newLoginReq = state.loginData;
    const name = e.target.name;
    const value = e.target.value;

    if (isValid(name, value)) {
      newLoginReq[name] = value.trim();
      updateState({
        type: "UPDATE_LOGIN_DATA",
        payload: { loginData: newLoginReq }
      });
    }
  }

  React.useEffect((): void => {
    verifyAuth();
  }, [performLogin]);

  const { loginData } = state;

  if (isAuth) {
    history.push("/auth/post");
  }

  return (
    <Container>
      <FormWrapper>
        <FormGroup>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextInput
              name="email"
              required={true}
              type="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={(e: any): void => {
                e.preventDefault();
                handleInputChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <PasswordInput
              name="password"
              required={true}
              type="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={(e: any): void => {
                e.preventDefault();
                handleInputChange(e);
              }}
            />
          </FormControl>
          <FormAction>
            <ButtonInput
              onClick={(e: any): void => {
                e.preventDefault();
                performLogin();
              }}
            >
              LOGIN
            </ButtonInput>
          </FormAction>
        </FormGroup>
      </FormWrapper>
    </Container>
  );
};
export default LoginPage;
