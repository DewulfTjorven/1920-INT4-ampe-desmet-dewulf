import React from "react";

import style from "./RegisterForm.module.css";

import TextInputAuth from "../../../../../components/TextInputAuth/TextInputAuth";
import TextInputAuthShort from "../../../../../components/TextInputAuthShort/TextInputAuthShort";
import ButtonRegister from "../../../../../components/ButtonRegister/ButtonRegister";

import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className={style.login}>
      <h1 className={style.title}>Create an account</h1>
      <div className={style.line}></div>
      <div className={style.name}>
        <TextInputAuthShort label="Voornaam" />
        <TextInputAuthShort label="Achternaam" />
      </div>
      <TextInputAuth label="E-mail" />
      <TextInputAuth label="Wachtwoord" />

      <label className={style.terms}>I agree to the terms of service and privacy policy
        <input className={style.check} type="checkbox" placeholder="check me"></input>
      </label>
      <Link className={style.button}><ButtonRegister cta="Create an account" /></Link>
    </div>
  );
};

export default RegisterForm;
