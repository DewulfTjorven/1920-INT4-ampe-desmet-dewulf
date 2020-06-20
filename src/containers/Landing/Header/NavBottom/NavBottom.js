import React from "react";
// import { ROUTES } from "../../consts";


import style from "./NavBottom.module.css";
import arrow from "../../../../img/arrow.png";



const NavBottom = () => {
  return (
    <div className={style.container}>
      <div className={style.usp__list}>
        <ul>
          <li><span className={style.span}>01 </span>Explore</li>
          <li><span className={style.span}>02 </span>Discover</li>
          <li><span className={style.span}>03 </span>Interact</li>
        </ul>
      </div>
      <img src={arrow} width="15px" alt="arrow" className={style.arrow}></img>
    </div>
  );
};

export default NavBottom;
