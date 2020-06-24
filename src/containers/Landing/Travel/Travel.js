import React from "react";
// import { ROUTES } from "../../consts";


import style from "./Travel.module.css";
import TravelContainer from "./TravelContainer/TravelContainer";

import island1 from "../../../img/island1.png";
import island2 from "../../../img/island2.png";

const Travel = () => {
  return (
    <div className={style.container} id="travel">
      <TravelContainer />
      <img src={island1} alt="Island with Statue of Liberty" className={style.island1}></img>
      <img src={island2} alt="Island with Colosseum" className={style.island2}></img>
    </div>
  );
};

export default Travel;
