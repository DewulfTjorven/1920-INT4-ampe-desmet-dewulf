import React, { useState } from "react";
import { ROUTES } from "../../../../consts";

import logo from "../../../../img/logo.png";

//import CreateTrip1Form from "../CreateTrip1Container/CreateTrip1Form/CreateTrip1Form";

import uiArrow from "../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../components/BackButtonCreate/BackButtonCreate";
import TextInputCreate from "../../../../components/TextInputCreate/TextInputCreate";

import style from "./CreateTrip1Container.module.css";

import { Link, useHistory } from "react-router-dom";
import { useStores } from "../../../../hooks/useStores";



const CreateTrip1Container = (props) => {

  const { locationStore } = useStores();
  const history = useHistory();

  const [tripName, setTripName] = useState("");
  const [tripDate, setTripDate] = useState("");

  let getLocation = undefined;

  if (props.trip.locationId !== "") {
    // Locatie ophalen
    getLocation = locationStore.getLocationById(props.trip.locationId);
    props.function();
  } else {
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
    <div className={style.container}>
      <div className={style.location__container}>
        <Link className={style.navbar_logo} to={ROUTES.home}>
          <img className={style.logo} width="92px" height="64px" src={logo} alt="Spotter logo"></img>
        </Link>
        <div>
          <p className={style.location}>{getLocation.name}</p>
          <div className={style.coordinates}>
            <p>{getLocation.coordinates}</p>
          </div>
          <div className={style.locationline}></div>
        </div>
      </div>
      <div className={style.create}>
        <h1 className={style.title}>Creating a trip</h1>
        <ul className={style.parts}>
          <li><Link to={ROUTES.dashboardMap} className={style.part}><div className={style.number}>1</div><p className={style.text}>Location</p></Link></li>
          <div className={style.line}></div>
          <li><Link className={style.part}><div className={style.number}>2</div><p className={style.text}>Info</p></Link></li>
          <div className={`${style.line} ${style.line__hidden}`}></div>
          <li><Link className={`${style.part} ${style.part__hidden}`}><div className={`${style.number} ${style.number__hidden}`}>3</div><p className={style.text}>Time</p></Link></li>
          <div className={`${style.line} ${style.line__hidden}`}></div>
          <li><Link className={`${style.part} ${style.part__hidden}`}><div className={`${style.number} ${style.number__hidden}`}>4</div><p className={style.text}>Share</p></Link></li>
        </ul>
        <h2 className={style.subtitle}>Tell us a bit more about <span className={style.subtitle__color}>this trip</span></h2>

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

      </div>
    </div>
  );
};

export default CreateTrip1Container;
