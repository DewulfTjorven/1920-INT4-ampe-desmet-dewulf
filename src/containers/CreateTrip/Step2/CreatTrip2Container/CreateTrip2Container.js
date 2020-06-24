import React from "react";
import { ROUTES } from "../../../../consts";

import logo from "../../../../img/logo.png";

import CreateTrip2Form from "./CreateTrip2Form/CreateTrip2Form"

import style from "./CreateTrip2Container.module.css";

import { Link } from "react-router-dom";
import { useStores } from "../../../../hooks/useStores";



const CreateTrip2Container = (props) => {
  const { locationStore } = useStores();

  // Locatie ophalen
  const getLocation = locationStore.getLocationById(props.trip.locationId);

  return (
    <div className={style.container}>
      <div className={style.location__container}>
        <Link className={style.navbar_logo} to={ROUTES.home}>
          <img className={style.logo} width="92px" height="64px" src={logo} alt="Spotter logo"></img>
        </Link>
        <div>
          <p className={style.location}>{getLocation.name}</p>
          <div className={style.coordinates}>
            <p>{getLocation.coordinates}</p>
          </div>
          <div className={style.locationline}></div>
        </div>
      </div>
      <div className={style.create}>
        <h1 className={style.title}>Creating a trip</h1>
        <ul className={style.parts}>
          <li><Link to={ROUTES.dashboardMap} className={style.part}><div className={style.number}>1</div><p className={style.text}>Location</p></Link></li>
          <div className={style.line}></div>
          <li><Link to={ROUTES.create1} className={style.part}><div className={style.number}>2</div><p className={style.text}>Info</p></Link></li>
          <div className={style.line}></div>
          <li><Link to={""} className={style.part}><div className={style.number}>3</div><p className={style.text}>Time</p></Link></li>
          <div className={`${style.line} ${style.line__hidden}`}></div>
          <li><Link to={""} className={`${style.part} ${style.part__hidden}`}><div className={`${style.number} ${style.number__hidden}`}>4</div><p className={style.text}>Share</p></Link></li>
        </ul>
        <h2 className={style.subtitle}>How long do you want <span className={style.subtitle__color}>to fly</span>?</h2>
        <CreateTrip2Form trip={props.trip} />
      </div>
    </div>
  );
};

export default CreateTrip2Container;
