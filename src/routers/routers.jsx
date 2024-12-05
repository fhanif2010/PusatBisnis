import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import login from "../pages/login/login";

function Routers () {
    return (
        <>
            <Routes>
                <Route path="/" exact Component={Home}/>
                <Route path="/login" exact Component={login}/>
            </Routes>
        </>
    )
}

export default Routers;