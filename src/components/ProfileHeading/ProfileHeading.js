import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

import { useStores } from "../../hooks/useStores"

import style from "./ProfileHeading.module.css";
import largeIcon from "../../img/ui_profile.svg"

const ProfileHeading = (user) => {
  const userItem = user.user;
  const history = useHistory();

  const { uiStore } = useStores();

  const handleLogout = e => {
    e.preventDefault();

    // Logout user
    uiStore.logoutUser();
    history.push(ROUTES.login)
  };

  return (
    <Link to="" onClick={handleLogout}>
      <div className={style.container}>
        <img className={style.profilePicture} src={userItem.avatar} alt="Profile"></img>
        <p className={style.profileName}>{userItem.name}</p>
        <img className={style.largeIcon} src={largeIcon} alt="See more icon"></img>
      </div>
    </Link>
  );
};

export default ProfileHeading;
