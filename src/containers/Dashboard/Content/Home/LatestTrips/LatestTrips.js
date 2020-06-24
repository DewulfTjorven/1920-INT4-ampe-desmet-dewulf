import React from "react";
// import { ROUTES } from "../../consts";
import TripItemSmall from "../../../../../components/TripItemSmall/TripItemSmall";
import { useStores } from "../../../../../hooks/useStores";


import style from "./LatestTrips.module.css";

import { ROUTES } from "../../../../../consts";
import LooseButtonWhite from "../../../../../components/LooseButton/LooseButtonWhite";


const LatestTrips = () => {
    const { tripStore } = useStores();

    const trips = tripStore.trips.slice(1, 4);

    return (
        <section className={style.dashboard_logtrips}>
            <h2 className={style.subtitle}>Latest trips</h2>

            <div className={style.tripsContainer}>
                {trips.map(trip => (
                    <TripItemSmall key={trip.id} trip={trip} detailRoute={ROUTES.dashboardTripDetail.to} />
                ))}
            </div>

            <LooseButtonWhite cta="View all" link={ROUTES.dashboardTrips} />
        </section>
    );
};

export default LatestTrips;
