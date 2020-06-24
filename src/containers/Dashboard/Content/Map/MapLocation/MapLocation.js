import React from "react";
import { ROUTES } from "../../../../../consts";

import LocationCard from "../../../../../components/LocationCard/LocationCard"

import style from "./MapLocation.module.css";
import { useStores } from "../../../../../hooks/useStores";

import locationPicture from "../../../../../img/location_placeholder.jpg";
import { useHistory } from "react-router-dom";

const MapLocations = (props) => {
    const history = useHistory();

    const { locationStore } = useStores();

    //Get location of the day
    const locationOfTheDay = locationStore.locations[Math.floor(Math.random() * locationStore.locations.length)];

    const clickTripOfDay = () => {
        history.push(ROUTES.dashboardMapDetail.to + locationOfTheDay.id);
    }

    //const ROUTES = props.routes;

    return (
        <div className={style.container}>
            <h1 className={style.title__hidden}>Locations</h1>
            <h2 className={style.subtitle}>Users picks</h2>
            <div className={style.locationsContainer}>
                {locationStore.locations.map(location => (
                    <LocationCard location={location} key={location.id} />
                ))}
            </div>
            <h2 className={style.subtitle}>Trip of the day</h2>
            <p>Curated by us, a place you have to see.</p>
            <div className={style.tripOfTheDay}>
                <div onClick={clickTripOfDay}>
                    <p className={style.locationName}>{locationOfTheDay.name}</p>
                </div>
                <img src={locationPicture} alt="Location">
                </img>
            </div>
        </div>
    );
};

export default MapLocations;
