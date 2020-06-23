import React from "react";
// import { ROUTES } from "../../consts";



import style from "./BackButtonCreate.module.css";

const BackButtonCreate = (props) => {
  return (
    <button className={style.button}>{props.cta}</button>
  );
};

export default BackButtonCreate;
