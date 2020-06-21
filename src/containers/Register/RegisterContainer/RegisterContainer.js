import React from "react";
// import { ROUTES } from "../../consts";
import Form from "./Form/Form";

import style from "./RegisterContainer.module.css";

const RegisterContainer = () => {
  return (
    <div className={style.container}>
      <Form />
    </div>
  );
};

export default RegisterContainer;
