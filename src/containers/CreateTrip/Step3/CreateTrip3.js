import React from "react";
//import { ROUTES } from "../../../consts";


import style from "./CreateTrip3.module.css";


import CreateTrip3Container from "./CreateTrip3Container/CreateTrip3Container";

const CreateTrip3 = (props) => {
  return (
    <div className={style.container}>
      <CreateTrip3Container trip={props.trip} />
    </div>
  );
};

export default CreateTrip3;
