import React, { useState } from "react";
import { ROUTES } from "../../../../../consts";
import { useHistory } from "react-router-dom";

import style from "./CreateTrip2Form.module.css";

import uiArrow from "../../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../../components/BackButtonCreate/BackButtonCreate";
import Trip from "../../../../../models/Trip";
import { useStores } from "../../../../../hooks/useStores";

const CreateTrip2Form = (props) => {
  const { tripStore, userStore } = useStores();

  const history = useHistory();

  const [TripFlightTime, setTripFlightTime] = useState("");

  // Checken als data is meegestuurd, anders stap terugsturen
  if (props.trip.name === "" && props.trip.date === "") {
    history.push(ROUTES.create1);
  }

  //Als data is ingevuld, trip aanmaken
  const handleFormSubmit = async e => {
    e.preventDefault();

    if (TripFlightTime !== "") {
      props.trip.flightTime = TripFlightTime;
      const formData = props.trip;

      const t = new Trip({
        name: formData.name,
        flightTime: formData.flightTime,
        locationId: formData.locationId,
        date: formData.date,
        store: tripStore,
        pilotId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
        ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078"
      });

      // Submit trip hardcode naar store
      tripStore.addTrip(t);
      tripStore.addUser(userStore.users[0], t);
      console.log(tripStore.trips);
      props.trip.newTripId = t.id;
      history.push(ROUTES.create3);


      // Submit trip to firebase
      try {
        //const result = await tripStore.createTrip(t);
        //props.trip.tripId = result;
        //history.push(ROUTES.create3);
      } catch (error) {
        //console.log(error);
      }

    } else {
      console.log(`Niet alle velden zijn ingevuld -> niet submitten`);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={style.form}>
        <label className={style.slider__label} for="slider">{TripFlightTime ? TripFlightTime : 38} <span className={style.slider__label__minutes}>minutes</span></label>
        <input onChange={e => setTripFlightTime(e.currentTarget.value)} className={style.slider} min="15" value={TripFlightTime} max="60" name="slider" type="range"></input>
        <div className={style.button__container}>
          <BackButtonCreate route={ROUTES.create1} cta="go back" />
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
