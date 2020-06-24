import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { useStores } from "../../../../hooks/useStores";

import { ROUTES } from "../../../../consts";

import style from "./TripDetail.module.css";

import pilot from "../../../../img/pilotblue.svg";
import TextInputGroup from "../../../../components/TextInputGroup/index";
import Countdown from "../../../../components/Countdown/Countdown";
import LooseButton from "../../../../components/LooseButton/LooseButton";
import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";
import star1 from "../../../../img/star1.svg";
import star2 from "../../../../img/star2.svg";
import placeholder from "../../../../img/placeholder.png";
import area from "../../../../img/area.svg";
import spots from "../../../../img/spots.svg";


const TripDetail = (props) => {
  const history = useHistory();

  // Store inladen
  const { tripStore, userStore, locationStore } = useStores();

  const currentUser = props.user;

  // ID ophalen uit url
  const { id } = useParams();

  // Trip ophalen op ID
  const trip = tripStore.getTripById(id);
  if (!trip) {
    history.push(ROUTES.dashboardTrips);
  }


  //Piloot ophalen van trip
  const getPilot = userStore.getUserById(trip.pilotId);


  //Locatie ophalen van trip
  const getLocation = locationStore.getLocationById(trip.locationId);


  // Datum ophalen van trip 
  const tripDate = trip.date;

  return (
    <div className={style.container}>
      <ProfileHeading user={currentUser} />
      <div className={style.header}>
        <LooseButton link={ROUTES.dashboardTrips} cta="Go back" />
        <h2 className={style.tripName}>{trip.name}</h2>
        <div className={style.line}></div>
      </div>
      <div className={style.content}>
        <div className={style.part__one}>
          <h3 className={style.title}>Flight details</h3>
          <div className={style.line}></div>
          <TextInputGroup label="trip code" value={trip.id} />
          <div className={style.line__dark}></div>
          <div className={style.pilots}>
            <img src={pilot} alt="Pilot icon"></img>
            <div className={style.pilot}>
              <p className={style.pilot__label}>Pilot</p>
              <p className={style.pilot__name}>{getPilot.name}</p>
            </div>
          </div>
          <div className={style.stars}>
            <img src={star2} alt="Star"></img>
            <img src={star2} alt="Star"></img>
            <img src={star2} alt="Star"></img>
            <img src={star2} alt="Star"></img>
            <img src={star1} alt="Opacity star"></img>
            <p className={style.score}>4 / 5</p>
          </div>
          <div className={style.line__dark}></div>
          <p className={style.pilot__label}>Flight time</p>
          <p className={style.pilot__label}><span className={style.number}>{trip.flightTime} </span>minutes</p>
        </div>
        <div className={style.part__two}>
          <h3 className={style.title}>Location</h3>
          <div className={style.line}></div>
          <img className={style.image} src={placeholder} alt="Placeholder drone beach"></img>
          <p className={style.destination}>{getLocation.name}</p>
          <div className={style.coordinates}>
            <p>{getLocation.coordinates}</p>
          </div>
          <div className={`${style.line__dark} ${style.line__dark__short}`}></div>
          <div className={style.icon__container}>
            <img src={area} alt="Area icon"></img>
            <div className={style.icon__text}>
              <p className={style.pilot__label}>Explorable area</p>
              <p className={style.icon__title}>{getLocation.radius} kilometers</p>
            </div>
          </div>
          <div className={style.icon__container}>
            <img src={spots} alt="Spots icon"></img>
            <div className={style.icon__text}>
              <p className={style.pilot__label}>Spots in area</p>
              <p className={style.icon__title}>{getLocation.spotCount} spots</p>
            </div>
          </div>
        </div>
        <div className={style.part__three}>
          <h3 className={style.title}>Time till start trip</h3>
          <div className={style.line}></div>
          <div>
            <Countdown date={`${tripDate}T00:00:00`} />
          </div>
        </div>
        <div className={style.buddies}>
          <h3 className={style.buddies__title}>Travel buddies</h3>
          <div className={style.line}></div>
          <ul>
            {trip.users.map(user => (
              <li className={style.buddies__users} key={user.id}>
                {user.id === trip.ownerId
                  ? `${user.name} (owner)`
                  : user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
