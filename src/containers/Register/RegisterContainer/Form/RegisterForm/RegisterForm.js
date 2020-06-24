import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../../../consts";

import style from "./RegisterForm.module.css";

import TextInputAuth from "../../../../../components/TextInputAuth/TextInputAuth";
import TextInputAuthShort from "../../../../../components/TextInputAuthShort/TextInputAuthShort";
import ButtonRegister from "../../../../../components/ButtonRegister/ButtonRegister";

import { useStores } from "../../../../../hooks/useStores";
import User from "../../../../../models/User";


const RegisterForm = () => {
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
      isPilot: "false"
    });

    const result = await uiStore.registerUser(user);

    if (result.uid) {
      // Gebruiker is correct geregistreerd
      history.push(ROUTES.dashboard);
    } else {
      // Registratie mislukt
      console.log(result);
    }
  };


  return (
    <div className={style.login}>
      <h1 className={style.title}>Create an account</h1>
      <div className={style.line}></div>
      <form onSubmit={handleRegisterTraveller}>
        <div className={style.name}>
          <TextInputAuthShort label="Voornaam" name="name" value={name} onChange={e => setName(e.currentTarget.value)} />
          <TextInputAuthShort label="Achternaam" name="surname" value={surName} onChange={e => setSurName(e.currentTarget.value)} />
        </div>
        <div className={style.account}>
          <TextInputAuth label="E-mail" name="mail" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <TextInputAuth label="Wachtwoord" name="password" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
        </div>
        <label className={style.terms}>I agree to the terms of service and privacy policy
          <input className={style.check} type="checkbox" placeholder="check me"></input>
        </label>
        <ButtonRegister cta="Create an account" />
      </form>
    </div>
  );
};

export default RegisterForm;
