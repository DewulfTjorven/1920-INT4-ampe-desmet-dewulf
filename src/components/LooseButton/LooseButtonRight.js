import React from "react";

import style from "./LooseButtonRight.module.css";

import uiArrow from "../../img/ui_arrow__white.svg";
import { Link } from "react-router-dom";

const LooseButtonRight = (props) => {

  return (
    <Link to={props.link} className={style.selectTripButton}>
      {props.cta}<img src={uiArrow} alt="Arrow icon"></img>
    </Link>
  );
};

export default LooseButtonRight;
