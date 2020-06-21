import React from "react";

import { useStores } from "../../../../hooks/useStores";
import { ROUTES } from "./../../../../consts";

import style from "./Dashboard_trips.module.css";

import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";
import TripItem from "../../../../components/TripItem/TripItem";


const Trips = (props) => {
    const { tripStore } = useStores();

    const currentUser = props.user;

    return (
        <>
            <div className={style.container}>

                <ProfileHeading user={currentUser} />

                <section>
                    <h1 className={style.title__hidden}>Trip Log</h1>
                    <p className={style.welcome_back}>View past trips</p>
                    <p className={style.ready}>Or create a new one</p>
                    <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
                </section>

                <section className={style.log_container}>
                    <h2 className={style.subtitle}>Past trips</h2>
                    <div>
                        <div className={style.log__categorie_names}>
                            <p>Name</p>
                            <p>Location</p>
                            <p>Pilot</p>
                            <p>Date</p>
                        </div>

                        <div className={style.tripLogContainer}>
                            {tripStore.trips.map(trip => (
                                <TripItem trip={trip} key={trip.id} detailRoute={ROUTES.dashboardTripDetail.to} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Trips;
