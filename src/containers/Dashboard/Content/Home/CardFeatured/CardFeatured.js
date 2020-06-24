import React from "react";
import { ROUTES } from "../../../../../consts";

import style from "./CardFeatured.module.css";


import FeaturedLocation from "../../../../../components/FeaturedLocation/FeaturedLocation"
import { useStores } from "../../../../../hooks/useStores";

const CardFeatured = () => {

    const { locationStore } = useStores();
    console.log(locationStore.locations);

    return (
        <section className={style.dashboard_featured}>
            <h2 className={style.subtitle}>Featured</h2>
            <div className={style.locationContainers}>
                {locationStore.locations.map(location => (
                    <FeaturedLocation key={location.id} location={location} />
                ))}
            </div>
        </section>
    );
};

export default CardFeatured;
