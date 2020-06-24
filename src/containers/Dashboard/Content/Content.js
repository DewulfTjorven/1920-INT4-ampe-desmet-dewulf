import React from "react";

import Home from "./Home/Home";
import Trips from "./Trips/Trips";
import TripDetail from "./TripDetail/TripDetail";
import Map from "./Map/Map";
import Cockpit from "./Cockpit/Cockpit";
import Profile from "./Profile/Profile";
import Certificate from "./Certificate/Certificate";


import { useStores } from "../../../hooks/useStores";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../../consts";


const Content = () => {
  const { uiStore } = useStores();

  // De huidige user ophalen
  const user = uiStore.currentUser;


  // Controleren als user een piloot is
  if (user.isPilot === "true") {
    // Doorsturen naar cockpit


  } else {
    // Doorsturen naar certificate pagina


  }

  return (
    <>
      <Switch>
        <Route exact path={ROUTES.dashboard}>
          <Redirect to={ROUTES.dashboardHome} />
        </Route>
        <Route exact path={ROUTES.dashboardHome}>
          <Home user={user} />
        </Route>
        <Route path={ROUTES.dashboardProfile.path}>
          <Profile user={user} />
        </Route>
        <Route path={ROUTES.dashboardTrips}>
          <Trips user={user} />
        </Route>
        <Route path={ROUTES.dashboardTripDetail.path}>
          <TripDetail user={user} />
        </Route>
        <Route path={ROUTES.dashboardMap}>
          <Map routes={ROUTES} user={user} />
        </Route>
        <Route path={ROUTES.dashboardPilotCockpit}>
          <Cockpit user={user} />
        </Route>
        <Route path={ROUTES.certificate}>
          <Certificate user={user} />
        </Route>

      </Switch>
    </>
  );
};

export default Content;
