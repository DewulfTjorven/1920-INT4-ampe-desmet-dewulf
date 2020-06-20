import React from "react";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../consts";

import style from "./Dashboard_sidebar.module.css";

import iconDashboard from "../../../img/icon_dashboard.png";

const Sidebar = () => {
    return (
        <>
            <nav className={style.container}>
                <div>

                </div>
                <ul className={style.navList}>
                    <li><NavLink className={`${style.navbar_li} ${style.navbar_li__active}`} to={ROUTES.dashboard}>
                        <img src={iconDashboard} width="22px" alt="Dashboard icon"></img>
                        Dashboard
                            </NavLink>
                    </li>
                    <li><NavLink className={`${style.navbar_li}`} to={ROUTES.dashboard}>
                        <img src={iconDashboard} width="22px" alt="Dashboard icon"></img>
                        My Trips
                            </NavLink>
                    </li>
                    <li><NavLink className={`${style.navbar_li}`} to={ROUTES.dashboard}>
                        <img src={iconDashboard} width="22px" alt="Dashboard icon"></img>
                        Map
                            </NavLink>
                    </li>
                    <li><NavLink className={`${style.navbar_li}`} to={ROUTES.dashboard}>
                        <img src={iconDashboard} width="22px" alt="Dashboard icon"></img>
                        Pilot Cockpit
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
