import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

//import { useStores } from "../../hooks/useStores"

import style from "./LocationCard.module.css";
import locationPicture from "../../img/location_placeholder.jpg"

import LooseButtonRight from "../LooseButton/LooseButtonRight";

const LocationCard = (props) => {
  const location = props.location;
  const history = useHistory();

  const clickLocation = () => {
    history.push(ROUTES.dashboardMapDetail.to + location.id);
  }

  return (
    <div className={style.container} onClick={clickLocation}>
      <img className={style.locationPicture} src={locationPicture} alt="Location"></img>
      <p className={style.locationName}>{}Jeep</p>
      <LooseButtonRight cta="View more" />
    </div>
  );
};

export default LocationCard;
