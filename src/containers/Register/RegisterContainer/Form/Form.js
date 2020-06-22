import React from "react";

import RegisterForm from "./RegisterForm/RegisterForm"


import style from "./Form.module.css";
import constructor from "../../../../img/constructor.svg";


const Form = () => {
  return (
    <div className={style.form}>
      <img src={constructor} height="55px" width="35px" alt="lock"></img>
      <RegisterForm />
    </div>
  );
};

export default Form;
