import React from "react";
// import { ROUTES } from "../../consts";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { ROUTES } from "../../../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Nav.module.css";
import logo from "../../../../img/logo.png";

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.nav__item}>
          <ul className={style.nav__item__links}>
            <li><NavLink className={`${style.nav__item__link} ${style.nav__item__link__selected}`} to={ROUTES.home}>
              Home
          </NavLink><div className={style.line}></div>
            </li>
            <li><NavLink className={style.nav__item__link} to={ROUTES.home}>
              Travel
          </NavLink>
            </li>
            <li><Link className={style.nav__item__link} to="#map">
              Map
          </Link>
            </li>
          </ul>
        </div>
        <div className={style.nav__item}>
          <NavLink to={ROUTES.home}><img className={style.nav__logo__img} src={logo} width="92px" height="64px" alt="drone-logo"></img></NavLink>
        </div>
        <div className={style.nav__item}>
          <NavLink className={style.signin} to={ROUTES.login}>Sign in</NavLink>
          <p className={style.signin__or}>or</p>
          <NavLink to={ROUTES.register}><Button cta="Create an account" /></NavLink>
        </div>
      </div>
    </div >
  );
};

export default Nav;
