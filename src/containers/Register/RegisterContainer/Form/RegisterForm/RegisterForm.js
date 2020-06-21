import React from "react";

import style from "./RegisterForm.module.css";


const RegisterForm = () => {
  return (
    <div className={style.login}>
        <h1 className={style.title}>Register</h1>
        <div className={style.line}></div>
        <label className={style.label}>First name</label>
        <input className={style.input} type="email"></input>
        <label className={style.label}>Last name</label>
        <input className={style.input} type="email"></input>
        <label className={style.label}>E-mail</label>
        <input className={style.input} type="email"></input>
        <label className={style.label}>Password</label>
        <input  className={style.input}type="password"></input>
        <input className={style.check} type="checkbox" placeholder="check me"></input>I Agree to the terms of service and privacy policy
        <button className={style.button} type= "submit">Sign up</button>
    </div>
  );
};

export default RegisterForm;
