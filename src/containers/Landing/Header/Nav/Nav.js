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
      <div className={`${style.nav__item} ${style.nav__item__left}`}>
        <ul className={style.navList}>
          <li><NavLink className={style.add} to={ROUTES.dashboard}>
            Home
          </NavLink>
          </li>
          <li><NavLink className={style.add} to={ROUTES.dashboard}>
            Travel
          </NavLink>
          </li>
          <li><NavLink className={style.add} to={ROUTES.dashboard}>
            Map
          </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${style.nav__item} ${style.nav__item__middle}`}>
        <img src={logo} width="40px" height="40px" alt="drone-logo"></img>
      </div>
      <div className={`${style.nav__item} ${style.nav__item__right}`}>
        <ul>
          <li><NavLink className={style.add} to={ROUTES.dashboard}>
            Sign in
        </NavLink></li>
        </ul>
        <Button cta="Create an account" />
      </div>
    </div>
  );
};

export default Nav;
