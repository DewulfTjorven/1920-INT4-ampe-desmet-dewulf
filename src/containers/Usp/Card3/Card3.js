import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../consts";
// import { ROUTES } from "../../consts";
import Button from "../../../components/Button/Button";



import style from "./Card3.module.css";
import icon from "../../../img/pilot.png";


const Card1 = () => {
  return (
    <div className={style.card}>
        <img src={icon} width="30px" alt="construction worker"></img>
        <h2 className={style.title}>I"m a pilot</h2>
        <div className={style.line}></div>
        <div>
          <div className={style.content}>
            <h3>01</h3>
            <p>Pick a location
              <br></br>
              <strong>or discover a new one</strong>
            </p>
          </div>
          <div className={style.content}>
            <h3>02</h3>
            <p>Pick a location
              <br></br>
              <strong>or discover a new one</strong>
            </p>
          </div>
          <div className={style.content}>
            <h3>03</h3>
            <p>Pick a location
              <br></br>
              <strong>or discover a new one</strong>
            </p>
          </div>
        </div>
        <div className={style.buttons}>
          <Button cta="Create an account"/>
          <NavLink className={style.signin} to={ROUTES.addgroup}>
            Sign in
          </NavLink>
        </div>
    </div>
  );
};

export default Card1;
