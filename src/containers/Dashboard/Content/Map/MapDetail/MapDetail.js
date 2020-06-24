import React from "react";
// import { ROUTES } from "../../consts";
import LooseButton from "../../../../../components/LooseButton/LooseButton";

import pilotIcon from "../../../../../img/icon_pilot__blue.svg";
import areaIcon from "../../../../../img/icon_area__blue.svg";
import spotIcon from "../../../../../img/icon_spots__blue.svg";



import style from "./MapDetail.module.css";
import { useStores } from "../../../../../hooks/useStores";
import { useParams, Link, useHistory } from "react-router-dom";

import uiArrow from "../../../../../img/ui_arrow.png";
import placeholder from "../../../../../img/location_placeholder.jpg";

const MapDetail = (props) => {
    const history = useHistory();

    const ROUTES = props.routes;

    const { locationStore, userStore } = useStores();

    // ID ophalen uit url
    const { id } = useParams();

    // Locatie ophalen op ID
    const location = locationStore.getLocationById(id);

    // Piloot ophalen voor locatie
    const getPilot = userStore.getUserById(location.ownerId);

    if (!location) {
        history.push(ROUTES.dashboardMapLocation)
    }



    return (
        <div className={style.detailContainer}>

            <LooseButton link={ROUTES.dashboardMap} cta="Go back" />

            <h1 className={style.title__hidden}>Trip detail - {location.name}</h1>

            <p className={style.name}>{location.name}</p>
            <p className={style.coordinates}>{location.coordinates}</p>

            <img className={style.locationImage} src={placeholder} alt="Detail location"></img>

            <div className={style.locationSpecContainer}>
                <img className={style.smallIcon} src={pilotIcon} alt="pilot icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>pilot</p>
                    <p>{getPilot.name}</p>
                </div>
            </div>
            <div className={style.locationSpecContainer}>
                <img src={areaIcon} alt="explorable area icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>Explorable area</p>
                    <p>{location.radius} kilometers</p>
                </div>
            </div>
            <div className={style.locationSpecContainer}>
                <img src={spotIcon} alt="spots in area icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>Spots in this area</p>
                    <p>{location.spotCount}</p>
                </div>
            </div>

            <h2 className={style.subtitle}>Explore this location</h2>

            <Link className={style.link_create} to={ROUTES.createLocation.to + id}>Plan a trip here<img src={uiArrow} alt="Arrow icon"></img></Link>
        </div>

    );
};

export default MapDetail;
