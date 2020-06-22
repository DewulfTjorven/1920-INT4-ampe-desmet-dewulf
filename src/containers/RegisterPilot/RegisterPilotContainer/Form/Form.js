import React from "react";

import RegisterPilotForm from "./RegisterPilotForm/RegisterPilotForm"


import style from "./Form.module.css";
import pilot from "../../../../img/pilot.svg";


const Form = () => {
  return (
    <div className={style.form}>
      <img src={pilot} height="55px" width="35px" alt="Pilot create account"></img>
      <RegisterPilotForm />
    </div>
  );
};

export default Form;
