import React, { ReactNode } from "react";

import { useSelector, useDispatch } from "react-redux";

import { State } from "interfaces/redux";

import { AccountState } from "modules/Account/interfaces";
import { fetchAccountInfo, FetchAccountInfoAction } from "../redux/actions";

interface IProps {
  children: ReactNode;
}

export const AccountContext = React.createContext({} as AccountState);

export const AccountContextProvider = ({ children }: IProps): JSX.Element => {
  const dispatch = useDispatch();

  const accountInfo: AccountState = useSelector(
    (state: State): AccountState => state.account
  );

  const fetchAccountDetail = React.useCallback((): FetchAccountInfoAction => {
    return dispatch(fetchAccountInfo());
  }, [dispatch]);

  React.useEffect((): void => {
    fetchAccountDetail();
  }, [fetchAccountDetail]);

  return (
    <AccountContext.Provider value={accountInfo}>
      {children}
    </AccountContext.Provider>
  );
};
