import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../consts";
// import { ROUTES } from "../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Card1.module.css";
import icon from "../../../../img/constructor.png";


const Card1 = () => {
  return (
    <div className={style.card}>
      <img src={icon} width="30px" alt="construction worker"></img>
      <h2 className={style.title}>Create a trip</h2>
      <div className={style.line}></div>
      <div>
        <div className={style.content}>
          <h3>01</h3>
          <p>Pick a location or discover a new one.</p>
        </div>
        <div className={style.content}>
          <h3>02</h3>
          <p>Invite friends or meet new people</p>
        </div>
        <div className={style.content}>
          <h3>03</h3>
          <p>Make the journey</p>
        </div>
      </div>
      <div className={style.buttons}>
        <Button cta="Create an account" />
        <NavLink className={style.signin} to={ROUTES.addgroup}>
          Sign in
          </NavLink>
      </div>
    </div>
  );
};

export default Card1;
