import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./app.css";
import SideBar from "../components/sideBar/sideBar";
import Main from "../components/main/main";
function App(){
    return(
        <div className="app">
          <SideBar/>
          <Main/>
        </div>
    )
}


export default App;