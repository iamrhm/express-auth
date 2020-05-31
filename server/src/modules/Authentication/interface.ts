import { Request } from 'express';

import { User } from 'modules/User/interface';

export interface LoginInfo {
  email?: string;
  password: string;
}

export interface RegistrationInfo {
  _id?: string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
}

export interface ValidationInfo {
  isValid: boolean;
  user: User;
  message: string;
}

export interface JwtHeader {
  _id: string;
  email: string;
}

export interface UserRequest extends Request {
  user: JwtHeader;
}
