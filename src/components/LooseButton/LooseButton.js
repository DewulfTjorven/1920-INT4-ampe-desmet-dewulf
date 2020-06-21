import React from "react";

import style from "./LooseButton.module.css";

import uiArrow from "../../img/ui_arrow__white.svg";
import { Link } from "react-router-dom";

const LooseButton = (props) => {

  return (
    <Link to={props.link} className={style.selectTripButton}>
      <img src={uiArrow} alt="Arrow icon"></img>{props.cta}
    </Link>
  );
};

export default LooseButton;
