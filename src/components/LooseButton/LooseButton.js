import React from "react";

import style from "./LooseButton.module.css";

import uiArrow from "../../img/ui_arrow__white.svg";

const LooseButton = (props) => {

  return (
    <button className={style.selectTripButton}>
      <img src={uiArrow} alt="Arrow icon"></img>{props.cta}
    </button>
  );
};

export default LooseButton;
