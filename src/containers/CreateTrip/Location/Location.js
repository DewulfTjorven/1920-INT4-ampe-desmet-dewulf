import React from "react";

//import style from "./Dashboard_trips.module.css";
import { Redirect, useParams } from "react-router-dom";
//import { useStores } from "../../../hooks/useStores";

const CreateTrip = (props) => {
    //const { locationStore } = useStores();

    const ROUTES = props.routes;

    // ID ophalen uit url
    const { id } = useParams();

    // LocatieId setten in trip
    props.trip.locationId = id;


    return (
        <>
            <Redirect to={ROUTES.create1} />
        </>
    );
};

export default CreateTrip;
