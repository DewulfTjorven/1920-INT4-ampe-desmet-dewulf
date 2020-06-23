import React, { useEffect, useState } from 'react';

// import { ROUTES } from "../../consts";
import Title from "../../../../components/Title/Title";


import style from "./HeaderContainer.module.css";
import hero from "../../../../img/hero.png";
import hero2 from "../../../../img/hero2.png";
import hero3 from "../../../../img/hero3.png";


const HeaderContainer = () => {

  var [count, setCount] = useState(0);
  const images = [hero, hero2, hero3];
  const titles = ["Explore The world with family & friends", "Discover new places", "interact with locals"];
  const text = [
    "Discover the world through a live bird’s eye view. View your favourite spots or discover new ones online, with your friends, family or other someone you don’t even know.", 
    "Discover spots only know by locals. Hidden from mass tourism, these are the most know and popular places by choice of the locals. A monumant, a cozy bar or a hidden cave. The possibilities are endless.", 
    "Interact with locals by pinning their spots. During tours, chat or talking is encouraged to re-imagine the social aspect associated with travel. Get talking!"
  ];

  const length = titles.length;
  var i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count++);
      i++;
      if (i === length) {
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
        text={text[count]} />
      <div className={style.hero}>
        <img className={style.hero__image} src={images[count]} width="800px" alt="Island with people and drone view"></img>
      </div>
    </div>
  );
};

export default HeaderContainer;
