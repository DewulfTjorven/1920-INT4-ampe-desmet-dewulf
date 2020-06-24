import React from "react";


import CardUpcoming from "./CardUpcoming/CardUpcoming";
import CardStatistics from "./CardStatistics/CardStatistics";
import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";
import LatestTrips from "./LatestTrips/LatestTrips";
import CardFeatured from "./CardFeatured/CardFeatured";
import CardTripOptions from "../../../../components/CardTripOptions/CardTripOptions";

import style from "./Dashboard_home.module.css";

const Home = (props) => {

  const currentUser = props.user;

  return (
    <>
      <div className={style.container}>

        <ProfileHeading user={currentUser} />

        <section>
          <p className={style.welcome_back}>Welcome back, <span className={style.welcome_back__name}>{currentUser.name}</span></p>
          <p className={style.ready}><span className={style.span__yellow}>Ready</span> to travel?</p>
          <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
        </section>


        <div className={style.dashboard_content__container}>

          <CardStatistics />

          <div className={style.cardTripOptions}>
            <CardTripOptions />
          </div>

          <CardUpcoming />

          <CardFeatured />

          <LatestTrips />

        </div>
      </div>
    </>
  );
};

export default Home;
