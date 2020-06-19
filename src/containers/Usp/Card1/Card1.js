import React from "react";
// import { ROUTES } from "../../consts";
import Button from "../../../components/Button/Button";


import style from "./Card1.module.css";
import icon from "../../../img/constructor.png";


const Card1 = () => {
  return (
    <div className={style.card}>
        <img src={icon} width="30px" alt="construction worker"></img>
        <h2 className={style.title}>Create a trip</h2>
        <hr></hr>
        <div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <Button cta="Create an account"/>

    </div>
  );
};

export default Card1;
