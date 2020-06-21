import React from "react";
// import { ROUTES } from "../../consts";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Nav.module.css";
import logo from "../../../../img/logo.png";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav__item}>
        <ul className={style.nav__item__links}>
          <li><NavLink className={`${style.nav__item__link} ${style.nav__item__link__selected}`} to={ROUTES.home}>
            Home
          </NavLink>
          </li>
          <li><NavLink className={style.nav__item__link} to={ROUTES.login}>
            Travel
          </NavLink>
          </li>
          <li><NavLink className={style.nav__item__link} to={ROUTES.login}>
            Map
          </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.nav__logo}>
        <img src={logo} width="92px" height="64px" alt="drone-logo"></img>
      </div>
      <div className={style.nav__item}>
        <NavLink className={style.signin} to={ROUTES.login}>Sign in</NavLink>
        <p className={style.signin__or}>or</p>
        <Button cta="Create an account" />
      </div>
    </div >
  );
};

export default Nav;
