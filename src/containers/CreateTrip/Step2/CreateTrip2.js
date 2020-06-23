import React from "react";
//import { ROUTES } from "../../../consts";


import style from "./CreateTrip2.module.css";


import CreateTrip2Container from "./CreatTrip2Container/CreateTrip2Container";

const CreateTrip2 = () => {
  return (
    <div className={style.container}>
      <CreateTrip2Container />
    </div>
  );
};

export default CreateTrip2;
