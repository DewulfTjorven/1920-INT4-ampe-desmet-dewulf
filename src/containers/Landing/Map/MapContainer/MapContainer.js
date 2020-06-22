import React from 'react';



import style from "./MapContainer.module.css";
import MapComponent from './MapComponent/MapComponent';

const MapContainer = () => {


  return (
    <div className={style.container}>
      <MapComponent />
    </div>
  );
};

export default MapContainer;
