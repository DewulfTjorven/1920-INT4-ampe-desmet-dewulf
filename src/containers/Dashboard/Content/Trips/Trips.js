import React from "react";

import style from "./Dashboard_trips.module.css";


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
                        <div></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Trips;
