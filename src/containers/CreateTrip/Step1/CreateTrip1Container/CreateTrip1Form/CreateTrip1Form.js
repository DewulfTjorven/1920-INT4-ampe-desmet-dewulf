import React from "react";
//import { ROUTES } from "../../../../../consts";

import style from "./CreateTrip1Form.module.css";

import uiArrow from "../../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../../components/BackButtonCreate/BackButtonCreate";
import TextInputCreate from "../../../../../components/TextInputCreate/TextInputCreate";

const CreateTrip1Form = () => {
  return (
    <>
      <form className={style.datetime}>
        <TextInputCreate label="Trip name" />
        <div className={style.datetime__container}>
          <div className={style.date__container}>
            <label for="date" className={style.date__label}>Trip date</label>
            <input required name="date" className={style.date__input} type="date" value="2020-07-07" min="2020-07-07" max="2024-12-31"></input>
          </div>
          <div className={style.time__container}>
            <label for="date" className={style.date__label}>Trip time</label>
            <input required name="date" className={style.date__input} type="time"></input>
          </div>
        </div>
        <div className={style.button__container}>
          <BackButtonCreate cta="go back" />
          <button className={`${style.navbar_link} ${style.navbar_link_create}`}>
            Next step
          <img src={uiArrow} width="20px" alt="Arrow icon"></img>
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTrip1Form;
