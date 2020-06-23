import React from "react";

import Landing from "./containers/Landing/Landing";
import Dashboard from "./containers/Dashboard/Dashboard";
import Signin from "./containers/Signin/Signin";
import Register from "./containers/Register/Register";
import RegisterPilot from "./containers/RegisterPilot/RegisterPilot";

import CreateTrip1 from "./containers/CreateTrip/Step1/CreateTrip1";
import CreateTrip2 from "./containers/CreateTrip/Step2/CreateTrip2";
import CreateTrip3 from "./containers/CreateTrip/Step3/CreateTrip3";


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
        <Route path={ROUTES.create1}>
          <CreateTrip1 />
        </Route>
        <Route path={ROUTES.create2}>
          <CreateTrip2 />
        </Route>
        <Route path={ROUTES.create3}>
          <CreateTrip3 />
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
