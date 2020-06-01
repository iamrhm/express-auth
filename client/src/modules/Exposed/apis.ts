import api from "helpers/api";

import { IAuth } from "modules/Auth/interfaces";

import { UserRegistrationRequest } from "./interfaces";

const verificationApis = {
  data: {
    login: (): string => `/auth/login`,
    registration: (): string => `/auth/register`
  }
};

export const verifyUserLogin = async (
  email: string,
  password: string
): Promise<IAuth> => {
  return api({
    url: verificationApis.data.login(),
    data: { email, password },
    method: "post"
  });
};

export const verifyUserRegistration = async (
  registrationReq: UserRegistrationRequest
): Promise<IAuth> => {
  return api({
    url: verificationApis.data.registration(),
    data: { ...registrationReq },
    method: "post"
  });
};
