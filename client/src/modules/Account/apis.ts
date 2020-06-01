import api from 'helpers/api';
import { AccountInfo } from 'modules/Account/interfaces';
import { getLocalStorage } from '../../helpers/localStore';

const userApis = {
  data: {
    accountDetail: (): string => `/auth/overview`,
  },
};

export const fetchAccountDetail = async (
  token: string
): Promise<AccountInfo> => {
  return api({
    url: userApis.data.accountDetail(),
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const verifyAuth = (): boolean => {
  const authInfo = getLocalStorage('authInfo');
  if (authInfo && authInfo.auth) {
    return authInfo.auth;
  }
  return false;
};
