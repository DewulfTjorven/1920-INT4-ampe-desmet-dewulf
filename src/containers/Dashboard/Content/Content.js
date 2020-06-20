import React from "react";

import Home from "./Home/Home";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../../consts";


const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path={ROUTES.home}>
                    <Home />
                </Route>
                <Route path={ROUTES.dashboard}>
                </Route>
            </Switch>
        </>
    );
};

export default Content;
