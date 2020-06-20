import React from "react";

import CardUpcoming from "./CardUpcoming/CardUpcoming";
import CardStatistics from "./CardStatistics/CardStatistics";
import CardTriplog from "./CardTriplog/CardTriplog";

import style from "./Dashboard_home.module.css";

const Home = () => {
    return (
        <>
            <div className={style.container}>
                <section>
                    <h1 className={style.title__hidden}>Dashboard</h1>
                    <p className={style.welcome_back}>Welcome back, <span className={style.welcome_back__name}>Jhuin</span></p>
                    <p className={style.ready}><span className={style.span__yellow}>Ready</span> to travel?</p>
                    <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
                </section>


                <div className={style.dashboard_content__container}>


                    <CardStatistics />

                    <section className={style.dashboard_log}>
                        <h2 className={style.subtitle}>Trip log</h2>
                    </section>

                    <CardUpcoming />

                    <section className={style.dashboard_featured}>
                        <h2 className={style.subtitle}>Featured</h2>
                    </section>

                    <section className={style.dashboard_ready}>
                        <h2 className={style.subtitle}>Ready to go?</h2>
                    </section>

                </div>
            </div>
        </>
    );
};

export default Home;
