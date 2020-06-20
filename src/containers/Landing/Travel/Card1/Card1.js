import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../consts";
// import { ROUTES } from "../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Card1.module.css";
import icon from "../../../../img/constructor.svg";


const Card1 = () => {
  return (
    <div className={style.card}>
      <img src={icon} width="35px" height="55px" alt="construction worker"></img>
      <h2 className={style.title}>Create a trip</h2>
      <div className={style.line}></div>
      <div className={style.content__wrapper}>
        <div className={style.content}>
          <h3 className={style.number}>01</h3>
          <div className={style.text__wrapper}>
            <p>Pick a location</p>
            <p className={style.content__bold}>or discover a new one.</p>
          </div>
        </div>
        <div className={style.content}>
          <h3 className={style.number}>02</h3>
          <div className={style.text__wrapper}>
            <p>Invite friends</p>
            <p className={style.content__bold}>or meet new people</p>
          </div>
        </div>
        <div className={style.content}>
          <h3 className={style.number}>03</h3>
          <div className={style.text__wrapper}>
            <p>Make the journey</p>
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <ul>
          <li>
            <Button cta="Create an account" />
          </li>
          <li className={style.signin}>
            <NavLink className={style.signin__link} to={ROUTES.addgroup}>
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card1;
