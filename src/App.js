import React from "react";

import Landing from "./containers/Landing/Landing";
import Dashboard from "./containers/Dashboard/Dashboard";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";
import Signin from "./containers/Signin/Signin";

function App() {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.home}>
          <Landing />
        </Route>
        <Route path={ROUTES.dashboard}>
          <Dashboard />
        </Route>
        <Route path={ROUTES.login}>
          <Signin />
        </Route>
      </Switch>

    </>
  );
}

export default App;
