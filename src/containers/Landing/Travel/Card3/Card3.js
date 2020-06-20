import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../consts";
// import { ROUTES } from "../../consts";
import SecButton from "../../../../components/SecButton/SecButton";



import style from "./Card3.module.css";
import icon from "../../../../img/pilot.svg";


const Card1 = () => {
  return (
    <div className={style.card}>
      <img src={icon} width="35px" height="55px" alt="Pilot"></img>
      <h2 className={style.title}>I"m a pilot</h2>
      <div className={style.line}></div>
      <div className={style.content__wrapper}>
        <div className={style.content}>
          <h3 className={style.number}>01</h3>
          <div className={style.text__wrapper}>
            <p>Add spots to the map</p>
          </div>
        </div>
        <div className={style.content}>
          <h3 className={style.number}>02</h3>
          <div className={style.text__wrapper}>
            <p>Accept flight invitations</p>
            <p className={style.content__bold}>and tour for your viewers</p>
          </div>
        </div>
        <div className={style.content}>
          <h3 className={style.number}>03</h3>
          <div className={style.text__wrapper}>
            <p>Earn some cash</p>
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <ul>
          <li>
            <SecButton cta="Create an account" />
          </li>
          <li className={style.signin}>
            <NavLink className={style.signin__link} to={ROUTES.home}>
              Sign in
          </NavLink>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Card1;
