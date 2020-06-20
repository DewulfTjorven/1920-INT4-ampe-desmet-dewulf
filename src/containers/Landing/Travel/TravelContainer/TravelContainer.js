import React from 'react';

// import { ROUTES } from "../../consts";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";


import style from "./TravelContainer.module.css";

import island1 from "../../../../img/island1.png";
import island2 from "../../../../img/island2.png";




const TravelContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <img src={island1} width="678px" height="618px" alt="Island with Colosseum" className={style.island1}></img>
        <div className={style.card__wrapper}>
          <div className={style.card__one}>
            <Card1 />
          </div>
          <div className={style.card__two}>
            <Card2 />
          </div>
          <div className={style.card__three}>
            <Card3 />
          </div>
        </div>
        <img src={island2} width="440px" height="998px" alt="Island with Statue of Liberty" className={style.island2}></img>
      </div>
    </div>
  );
};

export default TravelContainer;
