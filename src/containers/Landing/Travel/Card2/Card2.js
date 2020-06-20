import React from "react";
// import { ROUTES } from "../../consts";
import Button from "../../../../components/Button/Button";



import style from "./Card2.module.css";
import icon from "../../../../img/world.png";


const Card2 = () => {
  return (
    <div className={style.card}>
      <img src={icon} width="50px" alt="construction worker"></img>
      <h2 className={style.title}>Explore the map</h2>
      <div className={style.line}></div>
      <div>
        <div className={style.content}>
          <p>Explore our world map with unknown spots added by local drone pilots
            </p>
        </div>
      </div>
      <div className={style.buttons}>
        <Button cta="Start Exploring" />
      </div>
    </div>
  );
};

export default Card2;
