import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import locationImage from "../../img/location_placeholder.jpg";
import uiArrow from "../../img/ui_arrow__white.svg";

import style from "./FeaturedLocation.module.css";

const FeaturedLocation = (props) => {

  const location = props.location;

  return (
    <div className={style.featuredLocation}>
      <img src={locationImage} alt="location scenery"></img>
      <div>
        <p className={style.locationName}>{location.name}</p>
        <p className={style.locationCoordinates}>{location.coordinates}</p>
        <Link className={style.selectTripButton} to={ROUTES.dashboardMapDetail.to + location.id}>View more<img src={uiArrow} alt="Arrow icon"></img></Link>
      </div>
    </div>
  );
};

export default FeaturedLocation;
