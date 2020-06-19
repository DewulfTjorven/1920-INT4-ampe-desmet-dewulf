import React  from 'react';

// import { ROUTES } from "../../consts";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";


import style from "./UspContainer.module.css";


const UspContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default UspContainer;
