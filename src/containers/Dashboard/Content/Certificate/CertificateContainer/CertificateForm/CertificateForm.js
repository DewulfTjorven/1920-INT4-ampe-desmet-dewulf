import React from "react";

import { ROUTES } from "../../../../../../consts"

import style from "./CertificateForm.module.css";
import SecbuttonRegister from "../../../../../../components/SecButtonRegister/SecButtonRegister"
import { useStores } from "../../../../../../hooks/useStores";
import { useHistory } from "react-router-dom";


const CertificateContainer = () => {
  const { uiStore, userStore } = useStores();
  const history = useHistory();

  const handleMakePilot = async (e) => {
    e.preventDefault();
    history.push(ROUTES.dashboardCockpit);
  };

  return (
    <>
      <form onSubmit={handleMakePilot} className={style.form}>
        <div className={style.wrapper}>
          <input id="file" className={style.input} type="file"></input>
          <label className={style.label} for="file"><span className={style.choose}>CHOOSE A FILE</span></label>
        </div>
        <SecbuttonRegister cta="Become a pilot" />
      </form>
    </>
  );
};

export default CertificateContainer;
