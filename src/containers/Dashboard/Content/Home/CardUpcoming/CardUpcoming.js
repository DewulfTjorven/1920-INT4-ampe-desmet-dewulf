import React from "react";
// import { ROUTES } from "../../consts";

import style from "./CardUpcoming.module.css";

const Dashboard = () => {
    return (
        <section className={style.dashboard_upcoming}>
            <h2 className={style.subtitle}>Upcoming Trip</h2>


            <p className={style.dasboard_upcoming_title}>Destination</p>
            <p className={style.dasboard_upcoming__destination}>Taiwan</p>

            <div className={style.dasboard_upcoming__countdown_container}>

                <p className={style.dasboard_upcoming__countdown_days}>5 <span className={style.countdown__secondary}> days</span></p>
                <p className={style.dasboard_upcoming__countdown_hours}>17 <span className={style.countdown__secondary}> Hours</span></p>

            </div>
        </section>
    );
};

export default Dashboard;
