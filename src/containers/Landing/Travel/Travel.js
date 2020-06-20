import React from "react";
// import { ROUTES } from "../../consts";


import style from "./Travel.module.css";
import TravelContainer from "./TravelContainer/TravelContainer";

const Travel = () => {
  return (
    <div className={style.container}>
      <TravelContainer />
    </div>
  );
};

export default Travel;
