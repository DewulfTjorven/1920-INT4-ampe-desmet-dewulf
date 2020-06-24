import React from "react";

//import style from "./Dashboard_trips.module.css";
import { Switch, Route, Redirect } from "react-router-dom";

import CreateTrip1 from "./Step1/CreateTrip1";
import CreateTrip2 from "./Step2/CreateTrip2";
import CreateTrip3 from "./Step3/CreateTrip3";
import CreateTripLocation from "./Location/Location";
import { useStores } from "../../hooks/useStores";

import { useObserver } from "mobx-react-lite";



const CreateTrip = (props) => {
    const { locationStore } = useStores();

    const trip = {
        name: "",
        date: "",
        flightTime: "",
        locationId: ""
    }

    let location = undefined;

    const getLocation = () => {
        location = locationStore.getLocationById(trip.locationId);
    }

    //const location = undefined;

    const ROUTES = props.routes;

    return useObserver(() => (

        <>
            <Switch>
                <Route exact path={ROUTES.create}>
                    <Redirect to={ROUTES.create1} />
                </Route>

                <Route exact path={ROUTES.createLocation.path}>
                    <CreateTripLocation routes={ROUTES} trip={trip} />
                </Route>

                <Route exact path={ROUTES.create1}>
                    <CreateTrip1 location={location} function={getLocation} trip={trip} />
                </Route>

                <Route exact path={ROUTES.create2}>
                    <CreateTrip2 location={location} trip={trip} />
                </Route>

                <Route exact path={ROUTES.create3}>
                    <CreateTrip3 trip={trip} />
                </Route>
            </Switch>
        </>
    ));
};

export default CreateTrip;
