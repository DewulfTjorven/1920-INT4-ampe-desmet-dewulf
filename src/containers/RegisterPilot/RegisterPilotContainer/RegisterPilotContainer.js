import React from "react";
import { ROUTES } from "../../../consts";
import Form from "./Form/Form";

import style from "./RegisterPilotContainer.module.css";
import constructor from "../../../img/constructor.svg";

import { Link } from "react-router-dom"

const RegisterPilotContainer = () => {
  return (
    <div className={style.container}>
      <Form />
      <Link to={ROUTES.register} className={style.constructor__button}>
        <img className={style.constructor__icon} src={constructor} width="34px" height="55px" alt="Create an account"></img>
        <div className={style.constructor__content}>
          <h1 className={style.constructor__title}>I'm a traveler</h1>
          <div className={style.constructor__line}></div>
        </div>
      </Link>
    </div>
  );
};

export default RegisterPilotContainer;
