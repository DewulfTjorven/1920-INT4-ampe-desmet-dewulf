import React from "react";

// import { ROUTES } from "../../consts";
import Nav from "../Landing/Header/Nav/Nav";
import SigninContainer from "../../containers/Signin/SigninContainer/SigninContainer";

import style from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={style.container}>
      <Nav />
      <SigninContainer />
    </div>
  );
};

export default Signin;
