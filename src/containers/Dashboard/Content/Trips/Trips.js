import React from "react";

import style from "./Dashboard_trips.module.css";

import TripItem from "../../../../components/TripItem/TripItem";


const Trips = () => {
    return (
        <>
            <div className={style.container}>
                <section>
                    <p className={style.welcome_back}>View past trips</p>
                    <p className={style.ready}>Or create a new one</p>
                    <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
                </section>

                <section className={style.log_container}>
                    <h1 className={style.subtitle}>Past trips</h1>
                    <div>
                        <div className={style.log__categorie_names}>
                            <p>Name</p>
                            <p>Location</p>
                            <p>Pilot</p>
                            <p>Date</p>
                        </div>

                        <div className={style.tripLogContainer}>
                            <TripItem />
                            <TripItem />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Trips;
