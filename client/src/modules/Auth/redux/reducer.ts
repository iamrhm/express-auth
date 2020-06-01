import * as actionTypes from './actionTypes';
import { SetAuthAction } from './actions';
import { IAuth } from '../interfaces';

import { initialAuth } from '../store/initialAuth';

export default (
  state: IAuth = initialAuth,
  action: SetAuthAction
): IAuth => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
};
