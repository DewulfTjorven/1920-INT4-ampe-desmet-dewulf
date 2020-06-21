import React from "react";

import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./TripItemSmall.module.css";

import uiExpand from "../../img/ui_expand.svg";

const TripItemSmall = ({ trip, detailRoute }) => {

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(detailRoute + trip.id);
  };

  return (
    <div onClick={handleSubmit} className={style.tripContainer}>
      <p className={style.tripName}>{trip.name}</p>
      <p className={style.tripDestination}>Taiwan</p>
      <img className={style.expandButton} src={uiExpand} alt="Expand icon"></img>
    </div>
  );
};

TripItemSmall.propTypes = {
  detailRoute: PropTypes.string.isRequired
};

export default TripItemSmall;
