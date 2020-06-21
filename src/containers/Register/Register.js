import React from "react";

// import { ROUTES } from "../../consts";
import Nav from "../Landing/Header/Nav/Nav";
import RegisterContainer from "../Register/RegisterContainer/RegisterContainer";

import style from "./Register.module.css";

const Register = () => {
  return (
    <div className={style.container}>
      <Nav />
      <RegisterContainer />
    </div>
  );
};

export default Register;
