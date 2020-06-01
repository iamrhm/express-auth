import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Chart from 'modules/Chart';
import Post from 'modules/Post';

import { AccountContextProvider } from './context/account';

const AccountRouter = (): JSX.Element => (
  <AccountContextProvider>
    <Switch>
      <Route exact={true} path="/auth/post" component={Post} />
      <Route exact={true} path="/auth/Chart" component={Chart} />
    </Switch>
  </AccountContextProvider>
);

export default AccountRouter;
