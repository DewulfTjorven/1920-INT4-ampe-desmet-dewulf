import React from "react";

import style from "./LooseButton.module.css";

import uiArrow from "../../img/ui_arrow__white.svg";

const LooseButton = (props) => {

  return (
    <button className={style.selectTripButton}>
      {props.cta}<img src={uiArrow} alt="Arrow icon"></img>
    </button>
  );
};

export default LooseButton;
