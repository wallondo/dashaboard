import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./main.css";
import Header from "../parts/header";
import Body from "../parts/body";
function Main(){
    return(
        <div className="main">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}


export default Main;