import React from "react";
// import { ROUTES } from "../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Card2.module.css";
import icon from "../../../../img/world.svg";


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
        <Button cta="Start Exploring" />
      </div>
    </div>
  );
};

export default Card2;
