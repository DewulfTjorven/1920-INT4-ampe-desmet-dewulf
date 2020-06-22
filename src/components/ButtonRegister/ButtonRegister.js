import React from "react";
// import { ROUTES } from "../../consts";



import style from "./ButtonRegister.module.css";

const ButtonRegister = (props) => {
  return (
    <button className={style.button}>{props.cta}</button>
  );
};

export default ButtonRegister;
