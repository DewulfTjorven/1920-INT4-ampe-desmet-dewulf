import React from "react";
// import { ROUTES } from "../../consts";


import style from "./NavBottom.module.css";
import arrow from "../../../../img/arrow.png";



const NavBottom = () => {
  return (
    <div className={style.container}>
      <div className={style.usp__list}>
        <ul className={style.usp__list__items}>
          <li className={style.usp__list__item}><span className={`${style.usp__list__item__number} ${style.usp__list__item__number__selected}`}>01 </span>Explore</li>
          <li className={style.usp__list__item}><span className={style.usp__list__item__number}>02 </span>Discover</li>
          <li className={style.usp__list__item}><span className={style.usp__list__item__number}>03 </span>Interact</li>
        </ul>
        <div className={style.line}></div>
      </div>
      <div className={style.arrow}>
        <img src={arrow} width="18px" height="62px" alt="arrow"></img>
      </div>
    </div>
  );
};

export default NavBottom;
