export interface IAuth {
  auth: boolean;
  accessToken: string;
  refreshToken: string;
  message: string;
}

export interface IRefreshAuth {
  auth: boolean;
  accessToken: string;
}
