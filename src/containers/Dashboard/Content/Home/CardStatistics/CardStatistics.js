import React from "react";
// import { ROUTES } from "../../consts";

import style from "./CardStatistics.module.css";

const CardStatistics = () => {
    return (
        <div className={style.dashboard_statistics}>
            <div className={style.statistic_container}>
                <p className={style.statistic__name}>Locations explored</p>
                <p className={style.statistic__locations}>200</p>
            </div>
            <div className={style.statistic_container}>
                <p className={style.statistic__name}>Airtime</p>
                <p className={style.statistic__flight_time}>21<span className={style.minutes}>H</span></p>
            </div>
            <div className={style.statistic_container}>
                <p className={style.statistic__name}>Travelbuddies</p>
                <p className={style.statistic_locations}>10</p>
            </div>
        </div>
    );
};

export default CardStatistics;
