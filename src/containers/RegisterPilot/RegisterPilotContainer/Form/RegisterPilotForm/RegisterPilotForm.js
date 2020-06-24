import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../../../consts";

import style from "./RegisterPilotForm.module.css";

import TextInputAuthWhite from "../../../../../components/TextInputAuthWhite/TextInputAuthWhite";
import TextInputAuthShortWhite from "../../../../../components/TextInputAuthShortWhite/TextInputAuthShortWhite";
import SecButtonRegister from "../../../../../components/SecButtonRegister/SecButtonRegister";

import { useStores } from "../../../../../hooks/useStores";
import User from "../../../../../models/User";


const RegisterPilotForm = () => {
  const { userStore, uiStore } = useStores();
  const history = useHistory();

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegisterTraveller = async (e) => {
    e.preventDefault();

    const user = new User({
      name: name,
      surName: surName,
      store: userStore,
      email: email,
      password: password,
      isPilot: "true"
    });

    const result = await uiStore.registerUser(user);
    console.log(result);

    if (result) {
      history.push(ROUTES.dashboardPilot);
    }
  };


  return (
    <div className={style.login}>
      <h1 className={style.title}>Create an account</h1>
      <div className={style.line}></div>
      <form onSubmit={handleRegisterTraveller}>
        <div className={style.name}>
          <TextInputAuthShortWhite label="Voornaam" name="name" value={name} onChange={e => setName(e.currentTarget.value)} />
          <TextInputAuthShortWhite label="Achternaam" name="surname" value={surName} onChange={e => setSurName(e.currentTarget.value)} />
        </div>
        <div className={style.account}>
          <TextInputAuthWhite label="E-mail" name="mail" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <TextInputAuthWhite label="Wachtwoord" name="password" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        </div>
        <label className={style.terms}>I agree to the terms of service and privacy policy
          <input className={style.check} type="checkbox" placeholder="check me"></input>
        </label>
        <SecButtonRegister cta="Create an account" />
      </form>
    </div>
  );
};

export default RegisterPilotForm;
