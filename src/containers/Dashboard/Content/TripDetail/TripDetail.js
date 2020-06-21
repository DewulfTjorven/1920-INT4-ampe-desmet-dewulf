import React from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStores } from "../../../../hooks/useStores";

import { ROUTES } from "../../../../consts";

import style from "./TripDetail.module.css";

import LooseButton from "../../../../components/LooseButton/LooseButton";


const TripDetail = () => {
    // History en Store inladen
    const history = useHistory();
    const { tripStore } = useStores();

    //ID ophalen uit url
    const { id } = useParams();

    //Trip ophalen op ID
    console.log(id);
    const trip = tripStore.getTripById(id);


    // Back button
    const handleBackButton = e => {
        e.preventDefault();
        history.push(ROUTES.dashboardTrips);
    };

    return (
        <>
            <div className={style.container}>
                <section className={style.header}>
                    <LooseButton onClick={handleBackButton} cta="Go back" />
                    <h1 className={style.tripName}>{trip.name}</h1>
                </section>
            </div>
        </>
    );
};

export default TripDetail;
