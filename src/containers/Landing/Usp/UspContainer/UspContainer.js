import React from 'react';

// import { ROUTES } from "../../consts";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";


import style from "./UspContainer.module.css";

import island1 from "../../../../img/island1.png";
import island2 from "../../../../img/island2.png";




const UspContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <img src={island1} alt="drone-logo" className={style.island1}></img>
      <img src={island2} alt="drone-logo" className={style.island2}></img>
    </div>
  );
};

export default UspContainer;
