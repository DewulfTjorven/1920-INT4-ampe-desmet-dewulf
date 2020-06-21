import React from "react";

import { ROUTES } from "../../../../consts";

import style from "./Profile.module.css";

import ProfileHeading from "../../../../components/ProfileHeading/ProfileHeading";


const Profile = (props) => {

    const currentUser = props.user;

    return (
        <>
            <div className={style.container}>

                <ProfileHeading user={currentUser} />

                <section>
                    <h1 className={style.title__hidden}>Trip Log</h1>
                    <p className={style.welcome_back}>View past trips</p>
                    <p className={style.ready}>Or create a new one</p>
                    <p className={style.dashboard_description}>Create your trip, train your pilotting skills, discover locations and so much more..</p>
                </section>

            </div>
        </>
    );
};

export default Profile;
