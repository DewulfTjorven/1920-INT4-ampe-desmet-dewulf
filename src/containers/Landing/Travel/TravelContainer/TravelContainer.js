import React from 'react';

// import { ROUTES } from "../../consts";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";


import style from "./TravelContainer.module.css";






const TravelContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
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
    </div>
  );
};

export default TravelContainer;
