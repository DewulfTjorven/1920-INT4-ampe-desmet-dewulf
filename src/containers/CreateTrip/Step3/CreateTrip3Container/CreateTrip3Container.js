import React from "react";
import { ROUTES } from "../../../../consts";

import logo from "../../../../img/logo.png";

import style from "./CreateTrip3Container.module.css";

import uiArrow from "../../../../img/ui_arrowblue.svg"
import BackButtonCreate from "../../../../components/BackButtonCreate/BackButtonCreate";
import TextInputCreate from "../../../../components/TextInputCreate/TextInputCreate";

import { Link } from "react-router-dom";


const CreateTrip3Container = (props) => {
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
          <li><Link className={style.part}><div className={style.number}>1</div><p className={style.text}>Location</p></Link></li>
          <div className={style.line}></div>
          <li><Link className={style.part}><div className={style.number}>2</div><p className={style.text}>Info</p></Link></li>
          <div className={style.line}></div>
          <li><Link className={style.part}><div className={style.number}>3</div><p className={style.text}>Time</p></Link></li>
          <div className={style.line}></div>
          <li><Link className={style.part}><div className={style.number}>4</div><p className={style.text}>Share</p></Link></li>
        </ul>
        <h2 className={style.subtitle}><span className={style.subtitle__color}>All set.</span><br></br>Invite your friends</h2>
        <p>Share your trip code and invite other people via e-mail!</p>
        <label className={style.label}>Trip code
          <input className={style.input} value="45-724-DC"></input>
        </label>
        <TextInputCreate label="Send invitations via e-mail" />
        <button className={style.send}>Send</button>
        <div className={style.button__container}>
          <BackButtonCreate cta="go back" />
          <Link className={`${style.navbar_link} ${style.navbar_link_create}`} to={ROUTES.dashboardTrips}>
            Go to trips
          <img src={uiArrow} width="20px" alt="Arrow icon"></img>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default CreateTrip3Container;
