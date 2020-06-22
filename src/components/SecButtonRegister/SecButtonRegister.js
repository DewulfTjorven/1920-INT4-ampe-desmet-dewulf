import React from "react";
// import { ROUTES } from "../../consts";



import style from "./SecButtonRegister.module.css";

const SecButtonRegister = (props) => {
  return (
    <button className={style.button}>{props.cta}</button>
  );
};

export default SecButtonRegister;
