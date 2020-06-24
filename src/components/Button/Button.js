import React from "react";
import { ROUTES } from "../../consts";

import { Link } from "react-router-dom";


import style from "./Button.module.css";

const Button = (props) => {
  return (
    <Link route={ROUTES.create1} className={style.button}>{props.cta}</Link>
  );
};

export default Button;
