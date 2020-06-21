import React from "react";
import { ROUTES } from "../../consts";

import style from "./CardTripOptions.module.css";
import LooseButtonRight from "../LooseButton/LooseButtonRight";
import JoinForm from "./JoinForm/JoinForm";


const CardTriplog = () => {
    return (
        <div className={style.dashboard_ready}>
            <section>
                <h2 className={style.subtitle}>Join a trip</h2>
                <JoinForm />
            </section>
            <section>
                <h2 className={style.subtitle}>Create a trip</h2>
                <p className={style.createTripStep}><span className={style.yellow}>1</span>Pick a location</p>
                <p className={style.createTripStep}><span className={style.yellow}>2</span>Invite friends</p>
                <p className={style.createTripStep}><span className={style.yellow}>3</span>Make the journey</p>
                <LooseButtonRight link={ROUTES.dashboardMap} cta="Pick a location" />
            </section>
        </div>
    );
};

export default CardTriplog;
