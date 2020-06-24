import React, { useState } from "react";
import { ROUTES } from "../../../../../consts";
import { useHistory } from "react-router-dom";

import style from "./CreateTrip1Form.module.css";

import uiArrow from "../../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../../components/BackButtonCreate/BackButtonCreate";
import TextInputCreate from "../../../../../components/TextInputCreate/TextInputCreate";
import { useStores } from "../../../../../hooks/useStores";

const CreateTrip1Form = (props) => {
  const { locationStore } = useStores();
  const history = useHistory();

  const [tripName, setTripName] = useState("");
  const [tripDate, setTripDate] = useState("");

  if (props.trip.locationId !== "") {
    // Locatie ophalen
    //const getLocation = locationStore.getLocationById(props.trip.locationId);
    console.log(`Functie kan worden aangeroepen`);
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
    <>

    </>
  );
};

export default CreateTrip1Form;
