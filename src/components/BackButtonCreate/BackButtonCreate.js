import React from "react";
// import { ROUTES } from "../../consts";



import style from "./BackButtonCreate.module.css";
import { Link } from "react-router-dom";

const BackButtonCreate = (props) => {
  return (
    <Link to={props.route} className={style.button}>{props.cta}</Link>
  );
};

export default BackButtonCreate;
