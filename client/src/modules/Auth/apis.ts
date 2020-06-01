import api from 'helpers/api';

import { getLocalStorage, setLocalStorage } from '../../helpers/localStore';
import { IAuth, IRefreshAuth } from './interfaces';
import { initialAuth } from './store/initialAuth';

const authApis = {
  data: {
    updateSession: (): string => `/auth/token`,
  },
};

export const getAuth = async (refreshToken: string): Promise<IRefreshAuth> => {
  return api({
    url: authApis.data.updateSession(),
    headers: { Authorization: `Bearer ${refreshToken}` },
    method: 'put',
  });
};

export const getAuthFromLocalStorage = (): IAuth => {
  const authInfo: IAuth | null = getLocalStorage('authInfo');
  if (authInfo) {
    return authInfo;
  }
  return { ...initialAuth };
};

export const setAuthInLocalStorage = (authInfo: IAuth): IAuth => {
  setLocalStorage('authInfo', authInfo);
  return getAuthFromLocalStorage();
};

export const getToken = (): string => {
  const authInfo = getLocalStorage('authInfo');
  if (authInfo && authInfo.accessToken) {
    return authInfo.accessToken;
  } else {
    return '';
  }
};
