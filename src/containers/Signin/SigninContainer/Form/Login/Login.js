import React, { useState } from "react";

import style from "./Login.module.css";
import User from "../../../../../models/User";

import TextInputAuth from "../../../../../components/TextInputAuth/TextInputAuth"

import { useStores } from "../../../../../hooks/useStores"


const Login = () => {
  const { userStore, uiStore } = useStores();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    const user = new User({ name: "", store: userStore, email: email, password: password });
    const result = await uiStore.loginUser(user);
    console.log(result);
  };

  return (
    <div className={style.login}>
      <h1 className={style.title}>Sign in</h1>
      <div className={style.line}></div>
      <form onSubmit={handleLogin} className={style.formContainer}>

        <TextInputAuth value={email} onChange={e => setEmail(e.currentTarget.value)} label="E-mail" type="email" name="email" placeholder="Johndoe@mail.com" />
        <TextInputAuth value={password} onChange={e => setPassword(e.currentTarget.value)} label="Password" type="input" name="password" placeholder="Ibiza123" />

        <div><input className={style.check} type="checkbox" placeholder="check me"></input> Remember me</div>
        <button className={style.button} type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
