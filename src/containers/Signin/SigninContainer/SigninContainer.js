import React from "react";
// import { ROUTES } from "../../consts";
import Form from "../SigninContainer/Form/Form";

import style from "./SigninContainer.module.css";

const SigninContainer = () => {
  return (
    <div className={style.container}>
      <Form />
    </div>
  );
};

export default SigninContainer;
