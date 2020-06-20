import React, { useEffect } from 'react';

// import { ROUTES } from "../../consts";
import Title from "../../../../components/Title/Title";


import style from "./HeaderContainer.module.css";
import hero from "../../../../img/hero.png";


const HeaderContainer = () => {
  return (

    useEffect(() => {
      const timer = setTimeout(() => {
      }, 7000);
      return () => clearTimeout(timer);
    }, []),

    <div className={style.container}>
      <div>
        <Title title="EXPLORE THE WORLD WITH FAMILY & FRIENDS" text="Discover the world through a live bird’s eye view.
        View your favourite spots or discover new ones online, with your friends, family or other someone you don’t even know."/>
      </div>
      <img src={hero} width="700px" alt="Island with people and drone view"></img>
    </div>
  );
};

export default HeaderContainer;
