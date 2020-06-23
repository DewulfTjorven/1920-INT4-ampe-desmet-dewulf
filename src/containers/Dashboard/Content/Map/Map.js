import React from "react";

import { useStores } from "../../../../hooks/useStores";


const Map = () => {

    const { locationStore } = useStores();



    const koekje = async () => {
        await locationStore.getAllLocations();
        const locations = locationStore.locations;
        console.log(locations);
    }
    koekje();



    return (
        <>
            <p>Map</p>
        </>
    );
};

export default Map;
