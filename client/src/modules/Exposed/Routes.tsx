import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/Landing";
import RegistrationPage from "./pages/Registration";
import LoginPage from "./pages/Login";
import LogoutPage from "./pages/Logout";

const DefaultAuthRouter = (): JSX.Element => (
  <Switch>
    <Route exact={true} path="/" component={LandingPage} />
    <Route exact={true} path="/registration" component={RegistrationPage} />
    <Route exact={true} path="/login" component={LoginPage} />
    <Route exact={true} path="/logout" component={LogoutPage} />
  </Switch>
);

export default DefaultAuthRouter;
