import React from "react";

import Login from "./Login/Login"


import style from "./Form.module.css";
import signin from "../../../../img/signin.png";


const Form = () => {
  return (
    <div className={style.form}>
      <img src={signin} width="50px" alt="lock"></img>

      <Login />
    </div>
  );
};

export default Form;
