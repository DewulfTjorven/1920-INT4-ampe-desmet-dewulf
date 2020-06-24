import React from "react";
import { Link } from "react-router-dom";
import style from "./Cockpit.module.css";
import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading"
import uiArrow from "../../../../img/ui_arrowblue.svg"
const Cockpit = (props) => {

  console.log('Certificate');
  const currentUser = props.user;

  return (
    <div className={style.container}>
      <h2 className={style.hidden}>Pilot Cockpit</h2>
      <div className={style.header}>
        <p className={style.title}>Ready to <span className={style.title__highlight}>fly</span>, Jhiun?</p>
        <div className={style.line}></div>
      </div>
      <ProfileHeading user={currentUser} />
      <div className={style.available__title}>
        <h3 className={style.subtitle}>Available trips close to you</h3>
        <div className={style.line}></div>
      </div>
      <div className={style.available__container}>
        <div className={style.part__container}>
          <p className={style.location}>Barcelona, Spain</p>
          <div className={style.line__dark}></div>
          <div className={style.part}>
            <p>Passengers</p>
            <p className={style.number}>5</p>
          </div>
          <div className={style.part}>
            <p>Duration</p>
            <p className={style.number}>35 min.</p>
          </div>
          <div className={style.part}>
            <p>Spots</p>
            <p className={style.number}>9</p>
          </div>
          <button className={style.accept}>Accept</button>
        </div>
        <div className={style.part__container}>
          <p className={style.location}>Barcelona, Spain</p>
          <div className={style.line__dark}></div>
          <div className={style.part}>
            <p>Passengers</p>
            <p className={style.number}>5</p>
          </div>
          <div className={style.part}>
            <p>Duration</p>
            <p className={style.number}>35 min.</p>
          </div>
          <div className={style.part}>
            <p>Spots</p>
            <p className={style.number}>9</p>
          </div>
          <button className={style.accept}>Accept</button>
        </div>
        <div className={style.part__container}>
          <p className={style.location}>Barcelona, Spain</p>
          <div className={style.line__dark}></div>
          <div className={style.part}>
            <p>Passengers</p>
            <p className={style.number}>5</p>
          </div>
          <div className={style.part}>
            <p>Duration</p>
            <p className={style.number}>35 min.</p>
          </div>
          <div className={style.part}>
            <p>Spots</p>
            <p className={style.number}>9</p>
          </div>
          <button className={style.accept}>Accept</button>
        </div>
        <div className={style.part__container}>
          <p className={style.location}>Barcelona, Spain</p>
          <div className={style.line__dark}></div>
          <div className={style.part}>
            <p>Passengers</p>
            <p className={style.number}>5</p>
          </div>
          <div className={style.part}>
            <p>Duration</p>
            <p className={style.number}>35 min.</p>
          </div>
          <div className={style.part}>
            <p>Spots</p>
            <p className={style.number}>9</p>
          </div>
          <button className={style.accept}>Accept</button>
        </div>
      </div>
      <div className={style.my__title}>
        <h3 className={style.subtitle}>My spots</h3>
        <div className={style.line}></div>
      </div>
      <div className={style.my}>
        <div className={style.spot}>
          <div className={style.text}>
            <p className={style.spot__name}>Unknown tower in Paris</p>
            <div className={style.coordinates}>
              <p>52°22'38.155"N</p>
              <p className={style.coordinate__right}>4°52'14.976"E</p>
            </div>
          </div>
          <button className={`${style.accept} ${style.show}`}>Show spot</button>
        </div>
        <div className={style.spot}>
          <div className={style.text}>
            <p className={style.spot__name}>Unknown tower in Paris</p>
            <div className={style.coordinates}>
              <p>52°22'38.155"N</p>
              <p className={style.coordinate__right}>4°52'14.976"E</p>
            </div>
          </div>
          <button className={`${style.accept} ${style.show}`}>Show spot</button>
        </div>
        <div className={style.spot}>
          <div className={style.text}>
            <p className={style.spot__name}>Unknown tower in Paris</p>
            <div className={style.coordinates}>
              <p>52°22'38.155"N</p>
              <p className={style.coordinate__right}>4°52'14.976"E</p>
            </div>
          </div>
          <button className={`${style.accept} ${style.show}`}>Show spot</button>
        </div>
      </div>
      <div className={style.add}>
        <h3 className={style.subtitle}>Add spots</h3>
        <div className={style.line}></div>
        <div className={`${style.step} ${style.step__first}`}>
          <h3 className={style.step__number}>01</h3>
          <div className={style.text__wrapper}>
            <p className={style.text__first}>Pick a spot</p>
          </div>
        </div>
        <div className={style.step}>
          <h3 className={style.step__number}>02</h3>
          <div className={style.text__wrapper}>
            <p>Add information</p>
          </div>
        </div>
        <div className={style.step}>
          <h3 className={style.step__number}>03</h3>
          <div className={style.text__wrapper}>
            <p>Tour viewers around your spot</p>
          </div>
        </div>
        <Link className={style.button}>Add spots on the map
          <img className={style.arrow} src={uiArrow} alt="Arrow icon"></img>
        </Link>
      </div>
    </div>
  );
};

export default Cockpit;
