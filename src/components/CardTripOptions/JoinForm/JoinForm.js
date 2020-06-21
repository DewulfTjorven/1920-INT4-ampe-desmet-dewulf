import React, { useState } from "react";
import { useObserver } from "mobx-react-lite";
import style from "./JoinForm.module.css";

import TextInputGroup from "../../TextInputGroup/index";

import uiArrow from "../../../img/ui_arrow__white.svg";


const JoinForm = () => {
    const [tripId, settripId] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault();
        if (tripId !== "") {
            // Voeg een user toe aan een trip met volgend id
            console.log(tripId);

            settripId("");
        }
        console.log(`Knopsje geklikt`)
    };

    return useObserver(() => (
        <form onSubmit={handleFormSubmit}>

            <TextInputGroup onChange={e => settripId(e.currentTarget.value)} label="Trip code" name="tripcode" placeholder="10-047-AB" />

            <button className={style.submitButton}>
                Join Trip<img src={uiArrow} alt="Arrow icon"></img>
            </button>

        </form>
    ));
};

export default JoinForm;
