import { AccountState } from '../interfaces';
import { initialAccountInfo } from './initialAccountInfo';

export const initialAccountState: AccountState = {
  ...initialAccountInfo,
  isLoading: false,
};
