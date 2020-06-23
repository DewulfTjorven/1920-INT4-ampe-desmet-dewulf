import React, { useState } from "react";
import { ROUTES } from "../../../../../consts";
import { useHistory } from "react-router-dom";

import style from "./CreateTrip1Form.module.css";

import uiArrow from "../../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../../components/BackButtonCreate/BackButtonCreate";
import TextInputCreate from "../../../../../components/TextInputCreate/TextInputCreate";

const CreateTrip1Form = (props) => {
  const history = useHistory();

  const [tripName, setTripName] = useState("");
  const [tripDate, setTripDate] = useState("");

  console.log(props.trip);
  if (props.trip.locationId === "") {
    history.push(ROUTES.dashboardMap);
  }


  const handleFormSubmit = e => {
    e.preventDefault();

    if (tripName !== "" && tripDate !== "") {
      props.trip.name = tripName;
      props.trip.date = tripDate;

      history.push(ROUTES.create2);
    } else {
      console(`Nie ingevuld alles`);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={style.datetime}>
        <TextInputCreate onChange={e => setTripName(e.currentTarget.value)} name="tripname" label="Trip name" />
        <div className={style.datetime__container}>
          <div className={style.date__container}>
            <label for="date" className={style.date__label}>Trip date</label>
            <input onChange={e => setTripDate(e.currentTarget.value)} required name="date" className={style.date__input} type="date" min="2020-07-07" max="2024-12-31"></input>
          </div>
          <div className={style.time__container}>
            <label for="date" className={style.date__label}>Trip time</label>
            <input required name="date" className={style.date__input} type="time"></input>
          </div>
        </div>
        <div className={style.button__container}>
          <BackButtonCreate route={ROUTES.dashboardMap} cta="go back" />
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
