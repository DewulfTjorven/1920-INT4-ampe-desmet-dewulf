import React from "react";
// import { ROUTES } from "../../consts";
import TripItemSmall from "../../../../../components/TripItemSmall/TripItemSmall";
import { useStores } from "../../../../../hooks/useStores";


import style from "./LatestTrips.module.css";

import LooseButtonRight from "../../../../../components/LooseButton/LooseButtonRight";
import { ROUTES } from "../../../../../consts";


const LatestTrips = () => {
    const { tripStore } = useStores();

    const trips = tripStore.trips;

    return (
        <section className={style.dashboard_logtrips}>
            <h2 className={style.subtitle}>Latest trips</h2>

            <div className={style.tripsContainer}>
                {trips.map(trip => (
                    <TripItemSmall trip={trip} detailRoute={ROUTES.dashboardTripDetail.to} />
                ))}
            </div>

            <LooseButtonRight cta="View all" color="white" link={ROUTES.dashboardTrips} />
        </section>
    );
};

export default LatestTrips;
