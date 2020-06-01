import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { registerUser, UserRegistrationAction } from "../../redux/actions";
import { UserRegistrationRequest } from "../../interfaces";

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
  FormLink
} from "./styled";

const UPDATE_INPUT_DATA: "UPDATE_INPUT_DATA" = "UPDATE_INPUT_DATA";

interface UpdateInputAction {
  type: typeof UPDATE_INPUT_DATA;
  payload: { regData: UserRegistrationRequest };
}

type IAction = UpdateInputAction;

interface IState {
  regData: UserRegistrationRequest;
}

const initialState: IState = {
  regData: {
    email: "",
    password: "",
    name: ""
  }
};

function reducer(state: IState, { type, payload }: IAction): IState {
  switch (type) {
    case "UPDATE_INPUT_DATA":
      return { ...state, regData: payload.regData };
    default:
      return state;
  }
}

function isValid(key: string, value: any): boolean {
  return true;
}

const RegistrationPage: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(({ authInfo }: State): boolean => authInfo.auth);

  const [state, updateState] = React.useReducer(reducer, initialState);

  const performRegistration = React.useCallback((): UserRegistrationAction => {
    return dispatch(registerUser({ ...state.regData }));
  }, [dispatch]);

  const verifyAuth = React.useCallback((): VerifyAuthAction => {
    return dispatch(checkAuth());
  }, [dispatch]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newRegistrationReq = state.regData;
    const name = e.target.name;
    const value = e.target.value;

    if (isValid(name, value)) {
      newRegistrationReq[name] = value.trim();
      updateState({
        type: "UPDATE_INPUT_DATA",
        payload: { regData: newRegistrationReq }
      });
    }
  }

  React.useEffect((): void => {
    verifyAuth();
  }, [performRegistration]);

  const { regData } = state;

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
              value={regData.email}
              onChange={(e: any): void => {
                e.preventDefault();
                handleInputChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <TextInput
              name="name"
              required={true}
              type="text"
              placeholder="Enter name"
              value={regData.name}
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
              value={regData.password}
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
                performRegistration();
              }}
            >
              Sign Up
            </ButtonInput>
            <FormLink>
              <Link to="/login">Already have an account? login ></Link>
            </FormLink>
          </FormAction>
        </FormGroup>
      </FormWrapper>
    </Container>
  );
};
export default RegistrationPage;
