import React from "react";
// import { ROUTES } from "../../consts";
import LooseButton from "../../../../../components/LooseButton/LooseButton";

import pilotIcon from "../../../../../img/icon_pilot__blue.svg";
import areaIcon from "../../../../../img/icon_area__blue.svg";
import spotIcon from "../../../../../img/icon_spots__blue.svg";



import style from "./MapDetail.module.css";
import { useStores } from "../../../../../hooks/useStores";
import { useParams, Link } from "react-router-dom";

import uiArrow from "../../../../../img/ui_arrow.png";
import placeholder from "../../../../../img/location_placeholder.jpg";

const MapDetail = (props) => {
    //const history = useHistory();

    const ROUTES = props.routes;

    const { locationStore } = useStores();

    // ID ophalen uit url
    const { id } = useParams();
    console.log(id);

    // Locatie ophalen op ID
    const location = locationStore.getLocationById(id);
    console.log(location);

    if (!location) {
        //history.push(ROUTES.dashboardMapLocation)
    }



    return (
        <div className={style.detailContainer}>

            <LooseButton link={ROUTES.dashboardMap} cta="Go back" />

            <h1 className={style.title__hidden}>Trip detail - </h1>

            <p className={style.name}>Hailan</p>
            <p className={style.coordinates}>52°22'38.155"N     4°52'14.976"E</p>

            <img className={style.locationImage} src={placeholder} alt="Detail location"></img>

            <div className={style.locationSpecContainer}>
                <img className={style.smallIcon} src={pilotIcon} alt="pilot icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>pilot</p>
                    <p>pilotennaamman</p>
                </div>
            </div>
            <div className={style.locationSpecContainer}>
                <img src={areaIcon} alt="explorable area icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>Explorable area</p>
                    <p>25 kilometers</p>
                </div>
            </div>
            <div className={style.locationSpecContainer}>
                <img src={spotIcon} alt="spots in area icon"></img>
                <div>
                    <p className={style.locationSpecTitle}>Spots in this area</p>
                    <p>35</p>
                </div>
            </div>

            <h2 className={style.subtitle}>Explore this location</h2>

            <Link className={style.link_create} to={ROUTES.createLocation.to + id}>Plan a trip here<img src={uiArrow} alt="Arrow icon"></img></Link>
        </div>

    );
};

export default MapDetail;
