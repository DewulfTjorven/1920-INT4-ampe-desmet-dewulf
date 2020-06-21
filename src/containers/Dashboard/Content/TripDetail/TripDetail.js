import React from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../../../consts";

import style from "./TripDetail.module.css";

import LooseButton from "../../../../components/LooseButton/LooseButton";


const TripDetail = () => {

    const history = useHistory();

    const { id } = useParams();

    console.log(id);



    const handleBackButton = e => {
        e.preventDefault();
        history.push(ROUTES.dashboardTrips);
        console.log(`jeepse`);
    };

    return (
        <>
            <div className={style.container}>
                <section className={style.header}>
                    <LooseButton onClick={handleBackButton} cta="Go back" />
                    <h1 className={style.tripName}>Mijn eerste reis</h1>
                </section>
            </div>
        </>
    );
};

export default TripDetail;
