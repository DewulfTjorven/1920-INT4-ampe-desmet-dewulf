import React, {useEffect, useState } from 'react';

// import { ROUTES } from "../../consts";
import Title from "../../../../components/Title/Title";


import style from "./HeaderContainer.module.css";
import hero from "../../../../img/hero.png";


const HeaderContainer = () => {

  var [count, setCount] = useState(0);
  const titles = ["Explore The world with family & friends" , "Discover new places", "interact with locals"];
  const length = titles.length;
  var i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
        setCount(count++);
        i++;
        if(i === length){
          i = 0;
          count = 0;
        }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <Title
        title={titles[count]}
        text="Discover the world through a live bird’s eye view.
        View your favourite spots or discover new ones online, with your friends, family or people you meet online." />
      <div className={style.hero}>
        <img className={style.hero__image} src={hero} height="728px" width="874px" alt="Island with people and drone view"></img>
      </div>
    </div>
  );
};

export default HeaderContainer;
