import React from "react";

// import { ROUTES } from "../../consts";
import Nav from "../Landing/Header/Nav/Nav";
import RegisterPilotContainer from "../RegisterPilot/RegisterPilotContainer/RegisterPilotContainer";

import style from "./RegisterPilot.module.css";

const RegisterPilot = () => {
  return (
    <div className={style.container}>
      <Nav />
      <RegisterPilotContainer />
    </div>
  );
};

export default RegisterPilot;
