import React from "react";

import RegisterForm from "./RegisterForm/RegisterForm"


import style from "./Form.module.css";
import signin from "../../../../img/signin.png";


const Form = () => {
  return (
    <div className={style.form}>
        <img src={signin} width="50px"alt="lock"></img>

        <RegisterForm />
    </div>
  );
};

export default Form;
