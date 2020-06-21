import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

import style from "./ProfileHeading.module.css";
import largeIcon from "../../img/ui_profile.svg"

const ProfileHeading = (user) => {

  const userItem = user.user;

  return (
    <Link to={ROUTES.dashboardProfile.to}>
      <div className={style.container}>
        <img className={style.profilePicture} src={userItem.avatar} alt="Profile"></img>
        <p className={style.profileName}>{userItem.name}</p>
        <img className={style.largeIcon} src={largeIcon} alt="See more icon"></img>
      </div>
    </Link>
  );
};

export default ProfileHeading;
