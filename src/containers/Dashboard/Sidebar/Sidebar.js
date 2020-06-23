import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../consts";

import style from "./Dashboard_sidebar.module.css";

import dashboardLogo from "../../../img/logo.png";

import iconDashboard from "../../../img/dashboard.svg";
import iconTrips from "../../../img/trips.svg";
import iconMap from "../../../img/worldwhite.svg";
import iconCockpit from "../../../img/pilot.svg";

import uiArrow from "../../../img/ui_arrowblue.svg";



const Sidebar = () => {
  return (
    <>
      <nav className={style.container}>
        <ul className={style.navList}>
          <li className={style.navbar_li}><NavLink className={style.navbar_logo} to={ROUTES.home}>
            <img src={dashboardLogo} width="78px" height="60px" alt="Dashboard logo"></img>
          </NavLink>
          </li>
          <li className={style.navbar_li}><NavLink activeClassName={style.navbar_link__active} className={`${style.navbar_link}`} to={ROUTES.dashboardHome}>
            <img src={iconDashboard} width="28px" height="28px" alt="Dashboard icon"></img>
                        Dashboard
                            </NavLink>
          </li>
          <li className={style.navbar_li}><NavLink activeClassName={style.navbar_link__active} className={`${style.navbar_link}`} to={ROUTES.dashboardTrips}>
            <img src={iconTrips} width="38px" height="32px" alt="My trips icon"></img>
                        My Trips
                            </NavLink>
          </li>
          <li className={style.navbar_li}><NavLink activeClassName={style.navbar_link__active} className={`${style.navbar_link}`} to={ROUTES.dashboardMap}>
            <img src={iconMap} width="39px" height="30px" alt="Map icon"></img>
                        Map
                            </NavLink>
          </li>
          <li className={style.navbar_li}><NavLink activeClassName={style.navbar_link__active} className={`${style.navbar_link}`} to={ROUTES.dashboardCockpit}>
            <img src={iconCockpit} width="26px" height="40px" alt="Pilot cockpit icon"></img>
                        Pilot Cockpit
                            </NavLink>
          </li>
          <li className={style.navbar_li}>
            <NavLink className={`${style.navbar_linkcreate} ${style.navbar_link} ${style.navbar_link_create}`} to={ROUTES.dashboardMap}>
              Create trip
                            <img src={uiArrow} width="20px" alt="Arrow icon"></img>
            </NavLink>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Sidebar;
