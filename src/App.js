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
import { useStores } from "./hooks/useStores";

function App() {
  const { uiStore } = useStores();

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
          {
            uiStore.currentUser ?
              <Dashboard />
              :
              <Redirect to={ROUTES.login} />
          }
        </Route>

        <Route path={ROUTES.login}>
          {
            uiStore.currentUser ?
              <Redirect to={ROUTES.dashboard} />
              :
              <Signin />
          }
        </Route>

        <Route path={ROUTES.register}>
          {
            uiStore.currentUser ?
              <Redirect to={ROUTES.dashboard} />
              :
              <Register />
          }
        </Route>

        <Route path={ROUTES.registerpilot}>
          {
            uiStore.currentUser ?
              <Redirect to={ROUTES.dashboard} />
              :
              <RegisterPilot />
          }
        </Route>

      </Switch>

    </>
  ));
}

export default App;
