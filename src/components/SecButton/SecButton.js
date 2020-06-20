import React from "react";
// import { ROUTES } from "../../consts";



import style from "./SecButton.module.css";

const SecButton = (props) => {
  return (
    <button className={style.secbutton}>{props.cta}</button>
  );
};

export default SecButton;
