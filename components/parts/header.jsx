import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
function Header(){
   return(
        <header className="parts_header">
            <nav>
                <NavLink to="admin">Admin</NavLink>
                <NavLink to="produtos">Produtos</NavLink>
                <NavLink to="relatorios">Realatórios</NavLink>
            </nav>
        </header>
    )

}


export default Header;