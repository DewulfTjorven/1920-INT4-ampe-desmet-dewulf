import React from "react";
// import { ROUTES } from "../../consts";



import style from "./SecButton.module.css";
import { Link } from "react-router-dom";

const SecButton = (props) => {
  return (
    <Link to={props.link} className={style.secbutton}>{props.cta}</Link>
  );
};

export default SecButton;
