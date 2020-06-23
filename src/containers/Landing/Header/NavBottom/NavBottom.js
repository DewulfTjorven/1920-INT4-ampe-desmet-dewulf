import React , {useEffect, useState }from "react";
import { HashLink as Link } from 'react-router-hash-link';
// import { ROUTES } from "../../consts";


import style from "./NavBottom.module.css";
import arrow from "../../../../img/arrow.png";



const NavBottom = () => {

  var [count, setCount] = useState(0);
  const titles = ["01 Explore" , "02 Discover", "03 interact"];
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.usp__list}>
        <ul className={style.usp__list__items}>
            <li className={style.usp__list__item}>{titles[count]}</li>
        </ul>
        <div className={style.line}></div>
      </div>
      <div className={style.arrow}>
        <Link to="#yourAnchorTag">
        <img src={arrow} width="18px" height="62px" alt="arrow"></img>
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;




//  <li className={style.usp__list__item}><span className={`${style.usp__list__item__number} ${style.usp__list__item__number__selected}`}>01 </span>Explore</li>
// <li className={style.usp__list__item}><span className={style.usp__list__item__number}>02 </span>Discover</li>