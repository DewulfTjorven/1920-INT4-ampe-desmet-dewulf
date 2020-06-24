import React from "react";
import { ROUTES } from "../../../../consts";
import { Link } from "react-router-dom";


import style from "./Card2.module.css";
import icon from "../../../../img/world.svg";
import ui_arrowblue from "../../../../img/ui_arrowblue.svg"


const Card2 = () => {
  return (
    <div className={style.card}>
      <img src={icon} width="72px" height="55px" alt="Worldmap"></img>
      <h2 className={style.title}>Explore the map</h2>
      <div className={style.line}></div>
      <div>
        <div className={style.content}>
          <p>Explore our world map with<span className={style.content__bold}> unknown spots</span> added by <span className={style.content__bold}>local drone pilots</span>.</p>
        </div>
      </div>
      <div className={style.buttons}>
        <Link className={style.explore} to={ROUTES.map}>Explore the map<img className={style.arrow} alt="ui arrow" src={ui_arrowblue}></img></Link>
      </div>
    </div>
  );
};

export default Card2;
