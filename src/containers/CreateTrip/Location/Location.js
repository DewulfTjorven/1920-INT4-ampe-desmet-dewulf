import React from "react";

//import style from "./Dashboard_trips.module.css";
import { Switch, Route, Redirect, useParams } from "react-router-dom";

const CreateTrip = (props) => {


    const ROUTES = props.routes;

    // ID ophalen uit url
    const { id } = useParams();

    if (id) {
        props.trip.locationId = id;
    }

    return (
        <>

            <Redirect to={ROUTES.create1} />

        </>
    );
};

export default CreateTrip;
