import React from "react";
import MapContainer from "./MapContainer/MapContainer";

import style from "./Map.module.css";

const Map = () => {
  return (
    <div className={style.container}>
      <MapContainer />
    </div>
  );
};

export default Map;
