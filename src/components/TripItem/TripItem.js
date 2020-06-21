import React from "react";

import { useHistory } from "react-router-dom";

import style from "./TripItem.module.css";

import { ROUTES } from "../../consts";

import uiArrow from "../../img/ui_arrow__white.svg";

const TripItem = () => {

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const id = 10;
    history.push(ROUTES.dashboardTripDetail.to + id);
  };

  return (
    <div onClick={handleSubmit} className={style.tripItemContainer}>
      <p className={style.tripName}>Mijn eerste reis</p>
      <p className={style.tripLocattion}>Taiwan</p>
      <p className={style.tripPilot}>Pilot</p>
      <p className={style.tripDate}>Date</p>

      <button className={style.selectTripButton}>
        View more<img src={uiArrow} alt="Arrow icon"></img>
      </button>

    </div>
  );
};

export default TripItem;
