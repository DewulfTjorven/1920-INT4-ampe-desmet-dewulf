import React from "react";
// import { ROUTES } from "../../consts";
import Form from "./Form/Form";

import style from "./RegisterContainer.module.css";
import pilot from "../../../img/pilot.svg";

import { Link } from "react-router-dom"

const RegisterContainer = () => {
  return (
    <div className={style.container}>
      <Form />
      <Link className={style.pilot__button}>
        <img className={style.pilot__icon} src={pilot} width="34px" height="55px" alt="Create an account"></img>
        <div className={style.pilot__content}>
          <h1 className={style.pilot__title}>I'm a pilot</h1>
          <div className={style.pilot__line}></div>
        </div>
      </Link>
    </div>
  );
};

export default RegisterContainer;
