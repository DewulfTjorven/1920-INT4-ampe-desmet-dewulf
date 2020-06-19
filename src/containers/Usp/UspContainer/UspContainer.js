import React  from 'react';

// import { ROUTES } from "../../consts";
import Card1 from "../Card1/Card1";


import style from "./UspContainer.module.css";


const UspContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
};

export default UspContainer;
