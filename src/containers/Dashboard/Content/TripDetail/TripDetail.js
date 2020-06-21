import React from "react";

import { useParams } from "react-router-dom";
import { useStores } from "../../../../hooks/useStores";

import { ROUTES } from "../../../../consts";

import style from "./TripDetail.module.css";

import LooseButton from "../../../../components/LooseButton/LooseButton";
import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";


const TripDetail = (props) => {
    // Store inladen
    const { tripStore } = useStores();

    const currentUser = props.user;

    // ID ophalen uit url
    const { id } = useParams();

    // Trip ophalen op ID
    console.log(id);
    const trip = tripStore.getTripById(id);

    return (
        <>
            <div className={style.container}>

                <ProfileHeading user={currentUser} />

                <section className={style.header}>
                    <LooseButton link={ROUTES.dashboardTrips} cta="Go back" />
                    <h1 className={style.tripName}>{trip.name}</h1>
                </section>
            </div>
        </>
    );
};

export default TripDetail;
