import React from "react";

import Landing from "./containers/Landing/Landing";
import Dashboard from "./containers/Dashboard/Dashboard";
import Signin from "./containers/Signin/Signin";
import Register from "./containers/Register/Register";
import RegisterPilot from "./containers/RegisterPilot/RegisterPilot";

import CreateTrip from "./containers/CreateTrip/CreateTrip";


import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./consts";
import { useObserver } from "mobx-react-lite";

function App() {
  return useObserver(() => (
    <>
      <Switch>

        <Route exact path={ROUTES.home}>
          <Landing />
        </Route>

        <Route path={ROUTES.create}>
          <CreateTrip routes={ROUTES} />
        </Route>

        <Route path={ROUTES.dashboard}>
          <Dashboard />
        </Route>

        <Route path={ROUTES.login}>
          <Signin />
        </Route>

        <Route path={ROUTES.register}>
          <Register />
        </Route>

        <Route path={ROUTES.registerpilot}>
          <RegisterPilot />
        </Route>

      </Switch>

    </>
  ));
}

export default App;
