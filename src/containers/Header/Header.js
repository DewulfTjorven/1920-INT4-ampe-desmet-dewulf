import React from "react";
// import { ROUTES } from "../../consts";
import Nav from "./Nav/Nav";
import HeaderContainer from "./HeaderContainer/HeaderContainer";



import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <Nav />
      <HeaderContainer />
    </div>
  );
};

export default Header;
