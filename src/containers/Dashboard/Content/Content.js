import React from "react";

import Home from "./Home/Home";
import Trips from "./Trips/Trips";
import TripDetail from "./TripDetail/TripDetail";
import Map from "./Map/Map";
import Cockpit from "./Cockpit/Cockpit";

import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../../consts";


const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path={ROUTES.dashboard}>
                    <Redirect to={ROUTES.dashboardHome} />
                </Route>
                <Route exact path={ROUTES.dashboardHome}>
                    <Home />
                </Route>
                <Route path={ROUTES.dashboardTrips}>
                    <Trips />
                </Route>
                <Route path={ROUTES.dashboardTripDetail.path}>
                    <TripDetail />
                </Route>
                <Route path={ROUTES.dashboardMap}>
                    <Map />
                </Route>
                <Route path={ROUTES.dashboardCockpit}>
                    <Cockpit />
                </Route>
            </Switch>
        </>
    );
};

export default Content;
