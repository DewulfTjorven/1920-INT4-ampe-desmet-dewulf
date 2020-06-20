import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../consts";

import style from "./Dashboard_sidebar.module.css";

import dashboardLogo from "../../../img/logo_dashboard.png";

import iconDashboard from "../../../img/icon_dashboard.png";
import iconTrips from "../../../img/icon_trips.png";
import iconMap from "../../../img/icon_map.png";
import iconCockpit from "../../../img/icon_cockpit.png";

import uiArrow from "../../../img/ui_arrow.png";



const Sidebar = () => {
    return (
        <>
            <nav className={style.container}>
                <ul className={style.navList}>
                    <li className={style.navbar_li}><NavLink className={style.navbar_logo} to={ROUTES.dashboard}>
                        <img src={dashboardLogo} alt="Dashboard icon"></img>
                    </NavLink>
                    </li>
                    <li className={style.navbar_li}><NavLink className={`${style.navbar_link} ${style.navbar_link__active}`} to={ROUTES.dashboard}>
                        <img src={iconDashboard} width="25px" alt="Dashboard icon"></img>
                        Dashboard
                            </NavLink>
                    </li>
                    <li className={style.navbar_li}><NavLink className={`${style.navbar_link}`} to={ROUTES.dashboard}>
                        <img src={iconTrips} width="50px" alt="My trips icon"></img>
                        My Trips
                            </NavLink>
                    </li>
                    <li className={style.navbar_li}><NavLink className={`${style.navbar_link}`} to={ROUTES.dashboard}>
                        <img src={iconMap} width="40px" alt="Map icon"></img>
                        Map
                            </NavLink>
                    </li>
                    <li className={style.navbar_li}><NavLink className={`${style.navbar_link}`} to={ROUTES.dashboard}>
                        <img src={iconCockpit} width="30px" alt="Pilot cockpit icon"></img>
                        Pilot Cockpit
                            </NavLink>
                    </li>
                    <li className={style.navbar_li}>
                        <NavLink className={`${style.navbar_link} ${style.navbar_link_create}`} to={ROUTES.dashboard}>
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
