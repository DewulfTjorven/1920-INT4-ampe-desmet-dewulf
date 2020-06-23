import React from "react";
import { ROUTES } from "../../../../consts";

import logo from "../../../../img/logo.png";

import CreateTrip1Form from "../CreateTrip1Container/CreateTrip1Form/CreateTrip1Form"

import style from "./CreateTrip1Container.module.css";

import { Link } from "react-router-dom";



const CreateTrip1Container = (props) => {

  return (
    <div className={style.container}>
      <div className={style.location__container}>
        <Link className={style.navbar_logo} to={ROUTES.home}>
          <img className={style.logo} width="92px" height="64px" src={logo} alt="Spotter logo"></img>
        </Link>
        <div>
          <p className={style.location}>Barcelona, Spain</p>
          <div className={style.coordinates}>
            <p>52°22'38.155"N</p>
            <p className={style.coordinate__east}>4°52'14.976"E</p>
          </div>
          <div className={style.locationline}></div>
        </div>
      </div>
      <div className={style.create}>
        <h1 className={style.title}>Creating a trip</h1>
        <ul className={style.parts}>
          <li><Link to={ROUTES.dashboardMap} className={style.part}><div className={style.number}>1</div><p className={style.text}>Location</p></Link></li>
          <div className={style.line}></div>
          <li><Link className={style.part}><div className={style.number}>2</div><p className={style.text}>Info</p></Link></li>
          <div className={`${style.line} ${style.line__hidden}`}></div>
          <li><Link className={`${style.part} ${style.part__hidden}`}><div className={`${style.number} ${style.number__hidden}`}>3</div><p className={style.text}>Time</p></Link></li>
          <div className={`${style.line} ${style.line__hidden}`}></div>
          <li><Link className={`${style.part} ${style.part__hidden}`}><div className={`${style.number} ${style.number__hidden}`}>4</div><p className={style.text}>Share</p></Link></li>
        </ul>
        <h2 className={style.subtitle}>Tell us a bit more about <span className={style.subtitle__color}>this trip</span></h2>
        <CreateTrip1Form trip={props.trip} />
      </div>
    </div>
  );
};

export default CreateTrip1Container;
