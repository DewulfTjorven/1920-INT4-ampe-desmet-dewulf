import React from "react";
//import { ROUTES } from "../../../consts";


import style from "./CreateTrip2.module.css";


import CreateTrip2Container from "./CreatTrip2Container/CreateTrip2Container";

const CreateTrip2 = (props) => {
  return (
    <div className={style.container}>
      <CreateTrip2Container trip={props.trip} />
    </div>
  );
};

export default CreateTrip2;
