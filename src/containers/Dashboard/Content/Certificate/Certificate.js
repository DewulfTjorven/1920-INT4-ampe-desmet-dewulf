import React from "react";
//import { ROUTES } from "../../../../consts";
import { Link } from "react-router-dom";

import style from "./Certificate.module.css";

import CertificateContainer from "./CertificateContainer/CertificateContainer";
import arrow from "../../../../img/arrow_left.png";

const Certificate = () => {

  console.log('Certificate');

  return (
    <div className={style.container}>
      <Link className={style.back}>
        <img className={style.arrow} src={arrow} alt="Arrow icon"></img>Go back
      </Link>
      <CertificateContainer />
    </div>
  );
};

export default Certificate;
