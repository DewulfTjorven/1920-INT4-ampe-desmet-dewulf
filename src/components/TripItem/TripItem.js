import React from "react";

import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./TripItem.module.css";

import uiArrow from "../../img/ui_arrow__white.svg";

const TripItem = ({ trip, detailRoute }) => {

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(detailRoute + trip.id);
  };

  return (
    <div onClick={handleSubmit} className={style.tripItemContainer}>
      <p className={style.tripName}>{trip.name}</p>
      <p className={style.tripLocation}>Taiwan</p>
      <p className={style.tripPilot}>Pilot</p>
      <p className={style.tripDate}>{trip.date}</p>

      <button className={style.selectTripButton}>
        View more<img src={uiArrow} alt="Arrow icon"></img>
      </button>

    </div>
  );
};

TripItem.propTypes = {
  detailRoute: PropTypes.string.isRequired
};

export default TripItem;
