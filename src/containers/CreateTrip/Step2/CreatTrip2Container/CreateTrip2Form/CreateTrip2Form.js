import React from "react";
import { ROUTES } from "../../../../../consts";

import style from "./CreateTrip2Form.module.css";

import uiArrow from "../../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../../components/BackButtonCreate/BackButtonCreate";

const CreateTrip2Form = () => {
  return (
    <>
      <form className={style.form}>
        <label className={style.slider__label} for="slider">25 <span className={style.slider__label__minutes}>minutes</span></label>
        <input className={style.slider} min="15" max="60" name="slider" type="range"></input>
        <div className={style.button__container}>
          <BackButtonCreate cta="go back" />
          <button className={`${style.navbar_link} ${style.navbar_link_create}`} to={ROUTES.create3}>
            Next step
          <img src={uiArrow} width="20px" alt="Arrow icon"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTrip2Form;
