import React from "react";
// import { ROUTES } from "../../consts";

import LocationCard from "../../../../../components/LocationCard/LocationCard"

import style from "./MapLocation.module.css";
import { useStores } from "../../../../../hooks/useStores";

import locationPicture from "../../../../../img/location_placeholder.jpg";

const MapLocations = (props) => {

    const { locationStore } = useStores();

    const locations = locationStore.locations;

    const clickTripOfDay = () => {

    }

    console.log(locations);

    //const ROUTES = props.routes;

    return (
        <div className={style.container}>
            <h1 className={style.title__hidden}>Locations</h1>
            <h2 className={style.subtitle}>Users picks</h2>
            <div className={style.locationsContainer}>
                <LocationCard />
                <LocationCard />
                <LocationCard />
                <LocationCard />
            </div>
            <h2 className={style.subtitle}>Trip of the day</h2>
            <p>Curated by us, a place you have to see.</p>
            <div className={style.tripOfTheDay}>
                <div onClick={clickTripOfDay}>
                    <p className={style.locationName}>Hailan</p>
                </div>
                <img src={locationPicture} alt="Location">
                </img>
            </div>
        </div>
    );
};

export default MapLocations;
