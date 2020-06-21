import React from "react";

import Login from "../Form/Login/Login"


import style from "./Form.module.css";
import signin from "../../../../img/signin.png";


const Form = () => {
  return (
    <div className={style.form}>
        <img src={signin} width="50px"alt="drone-logo"></img>

        <Login />
    </div>
  );
};

export default Form;
