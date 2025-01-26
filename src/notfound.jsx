import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./notfound.css";

export default function NotFound(){
    return(
        <div className="notfound">
           <div className="not">
                    <div className="not_img">
                            <img src="/img/not.png" alt="" />
                    </div>
                    <h1>404</h1>
                    <h2>Página Não Encontrada <br /> Vá para a página Inicial</h2>
           </div>
        </div>
    )
}


