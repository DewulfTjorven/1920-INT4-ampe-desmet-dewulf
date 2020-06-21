import React from "react";

import style from "./TripDetail.module.css";

import { useParams } from "react-router-dom";


const TripDetail = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <>
            <div className={style.container}>
                <section>
                    <p className={style.welcome_back}>View past trips</p>
                    <p className={style.ready}>Or create a new one</p>
                    <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
                </section>
            </div>
        </>
    );
};

export default TripDetail;
