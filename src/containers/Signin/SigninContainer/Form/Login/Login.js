import React from "react";

import Button from "../../../../../components/Button/Button"



import style from "./Login.module.css";


const Login = () => {
  return (
    <div className={style.login}>
        <h1 className={style.title}>Sign in</h1>
        <div className={style.line}></div>
        <label className={style.label}>E-mail</label>
        <input className={style.input} type="email"></input>
        <label className={style.label}>Password</label>
        <input  className={style.input}type="password"></input>
        <input type="checkbox" placeholder="check me"></input>
        <button className={style.button} type= "submit">Sign in</button>
    </div>
  );
};

export default Login;
