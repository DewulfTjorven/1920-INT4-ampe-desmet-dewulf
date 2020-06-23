import React from "react";

import style from "./CertificateForm.module.css";
import SecbuttonRegister from "../../../../../../components/SecButtonRegister/SecButtonRegister"


const CertificateContainer = () => {
  return (
    <>
      <form className={style.form}>
        <div className={style.wrapper}>
          <input id="file" className={style.input} type="file"></input>
          <label for="file"><span className={style.choose}>CHOOSE A FILE</span></label>
        </div>
        <SecbuttonRegister cta="Become a pilot" />
      </form>
    </>
  );
};

export default CertificateContainer;
