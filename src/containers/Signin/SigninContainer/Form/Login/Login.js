import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../../../consts";

import style from "./Login.module.css";
import User from "../../../../../models/User";

import TextInputAuth from "../../../../../components/TextInputAuth/TextInputAuth"

import { useStores } from "../../../../../hooks/useStores"


const Login = () => {
  const { userStore, uiStore } = useStores();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    const user = new User({ name: "", store: userStore, email: email, password: password });
    const result = await uiStore.loginUser(user);

    console.log(result);

    if (result) {
      history.push(ROUTES.dashboard);
    }
  };

  return (
    <div className={style.login}>
      <h1 className={style.title}>Sign in</h1>
      <div className={style.line}></div>
      <form onSubmit={handleLogin} className={style.formContainer}>
        <TextInputAuth value={email} onChange={e => setEmail(e.currentTarget.value)} label="E-mail" type="email" name="email" placeholder="Johndoe@mail.com" />
        <TextInputAuth value={password} onChange={e => setPassword(e.currentTarget.value)} label="Password" type="password" name="password" placeholder="Ibiza123" />
        <label className={style.terms}>Remember me
          <input className={style.check} type="checkbox" placeholder="check me"></input>
        </label>
        <button className={style.button} type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
