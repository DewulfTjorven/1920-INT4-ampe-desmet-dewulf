import React from "react";
// import { ROUTES } from "../../consts";
import Form from "./Form/Form";

import style from "./RegisterContainer.module.css";
import signin from "../../../img/pilot.png";


const RegisterContainer = () => {
  return (
    <div className={style.container}>
      <Form />
      <div className={style.pilot__button}>
        <img src={signin} width="60px" height="60px" alt="lock"></img>
        <div>
          <h1 className={style.pilot__title}>I'm a pilot</h1>
          <div className={style.pilot__line}></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
