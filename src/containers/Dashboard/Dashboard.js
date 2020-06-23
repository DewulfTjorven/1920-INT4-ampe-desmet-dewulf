import React from "react";
// import { ROUTES } from "../../consts";

import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

import style from "./DashboardContainer.module.css";


const Dashboard = () => {
  return (
    <div className={style.container}>
      <h1 className={style.hidden}>Dashboard</h1>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
