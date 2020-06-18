import React from "react";
// import { ROUTES } from "../../consts";



import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={style.button}>{props.cta}</button>
  );
};

export default Button;
