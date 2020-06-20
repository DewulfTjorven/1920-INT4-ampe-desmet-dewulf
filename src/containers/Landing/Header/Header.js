import React from "react";
// import { ROUTES } from "../../consts";
import Nav from "./Nav/Nav";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import NavBottom from "./NavBottom/NavBottom";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <Nav />
      <HeaderContainer />
      <NavBottom />
    </div>
  );
};

export default Header;
