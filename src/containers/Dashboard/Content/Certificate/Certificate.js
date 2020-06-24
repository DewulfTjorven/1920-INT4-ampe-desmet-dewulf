import React from "react";
//import { ROUTES } from "../../../../consts";

import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading"

import style from "./Certificate.module.css";

import CertificateContainer from "./CertificateContainer/CertificateContainer";

const Certificate = (props) => {

  console.log('Certificate');

  return (
    <div className={style.container}>
      <ProfileHeading user={props.user} />
      <CertificateContainer />
    </div>
  );
};

export default Certificate;
