import React from 'react';
// import { ROUTES } from "../../consts";



import style from "./Title.module.css";



const Title = (props) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.text}>{props.text}</p>
    </div>
  );
};

export default Title;
