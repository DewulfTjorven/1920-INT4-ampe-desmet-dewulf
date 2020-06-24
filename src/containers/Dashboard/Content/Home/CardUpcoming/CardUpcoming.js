import React from "react";
// import { ROUTES } from "../../consts";

import style from "./CardUpcoming.module.css";
import { useStores } from "../../../../../hooks/useStores";
import Countdown from "../../../../../components/Countdown/Countdown";

const Dashboard = () => {
    const { tripStore } = useStores();

    const trip = tripStore.trips.slice(1, 2)[0];
    const date = trip.date;

    return (
        <section className={style.dashboard_upcoming}>
            <h2 className={style.subtitle}>Upcoming Trip</h2>


            <p className={style.dasboard_upcoming_title}>name</p>
            <p className={style.dasboard_upcoming__destination}>{trip.name}</p>

            <div className={style.dasboard_upcoming__countdown_container}>

                <Countdown date={date} />

            </div>
        </section>
    );
};

export default Dashboard;
