import React, { } from 'react';

// import { ROUTES } from "../../consts";
import Title from "../../../../components/Title/Title";


import style from "./HeaderContainer.module.css";
import hero from "../../../../img/hero.png";


const HeaderContainer = () => {
  return (

    //useEffect(() => {
    //  const timer = setTimeout(() => {
    //  }, 7000);
    //  return () => clearTimeout(timer);
    //}, []),

    <div className={style.container}>
      <Title
        title="EXPLORE THE WORLD WITH FAMILY & FRIENDS"
        text="Discover the world through a live bird’s eye view." />
      <div className={style.hero}>
        <img className={style.hero__image} src={hero} height="910px" width="1092px" alt="Island with people and drone view"></img>
      </div>
    </div>
  );
};

export default HeaderContainer;
