import React from "react";

import style from "./TripDetail.module.css";

import { useParams } from "react-router-dom";


const TripDetail = () => {

    const { id } = useParams();
    console.log(id);

    return (
        <>
            <div className={style.container}>
                <section>
                    <button></button>
                    <h1 className={style.ready}>Mijn eerste reis</h1>
                </section>
            </div>
        </>
    );
};

export default TripDetail;
