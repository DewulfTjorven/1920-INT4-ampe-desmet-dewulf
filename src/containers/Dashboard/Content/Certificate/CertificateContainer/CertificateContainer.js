import React from "react";

import style from "./CertificateContainer.module.css";

import pilot from "../../../../../img/pilot.svg";
import CertificateForm from "./CertificateForm/CertificateForm"

const CertificateContainer = () => {
  return (
    <div className={style.container}>
      <img src={pilot} alt="Pilot icon"></img>
      <h1 className={style.title}>Do you want to become a pilot?</h1>
      <div className={style.line}></div>
      <p className={style.text}>Upload a clear picture of your drone license.</p>
      <CertificateForm />
    </div>
  );
};

export default CertificateContainer;
