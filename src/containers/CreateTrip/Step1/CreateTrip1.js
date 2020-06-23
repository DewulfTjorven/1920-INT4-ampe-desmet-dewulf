import React from "react";
//import { ROUTES } from "../../../consts";


import style from "./CreateTrip1.module.css";


import CreateTrip1Container from "./CreateTrip1Container/CreateTrip1Container";

const CreateTrip1 = (props) => {

  return (
    <div className={style.container}>
      <CreateTrip1Container trip={props.trip} />
    </div>
  );
};

export default CreateTrip1;
