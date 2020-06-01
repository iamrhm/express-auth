import React from "react";
import { Route, Switch } from "react-router-dom";

import Exposed from "modules/Exposed";
import AuthRoute from "modules/Account";

const router = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <Route path="/" component={Exposed} />
    </Switch>
  );
};

export default router;
