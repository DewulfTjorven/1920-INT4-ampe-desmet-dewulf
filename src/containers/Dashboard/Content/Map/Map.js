import React from "react";

import { useStores } from "../../../../hooks/useStores";
import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";
import MapDetail from "./MapDetail/MapDetail";
import MapLocation from "./MapLocation/MapLocation";



import style from "./Map.module.css";
import { Route, Switch, Redirect } from "react-router-dom";



const Map = (props) => {

    const { locationStore } = useStores();
    const ROUTES = props.routes;

    const koekje = async () => {
        await locationStore.getAllLocations();
        //const locations = locationStore.locations;
        //console.log(locations);
    }
    koekje();



    return (
        <>
            <div>
                <ProfileHeading user={props.user} />

                <div className={style.contentContainer}>
                    <Switch>
                        <Route exact path={ROUTES.dashboardMap}>
                            <Redirect to={ROUTES.dashboardMapLocation} />
                        </Route>
                        <Route exact path={ROUTES.dashboardMapDetail.path}>
                            <MapDetail locations={locationStore.locations} routes={ROUTES} />
                        </Route>
                        <Route exact path={ROUTES.dashboardMapLocation}>
                            <MapLocation routes={ROUTES} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Map;
