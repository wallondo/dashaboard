import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./loja.css";
import { Dados } from "../../src/dados";

function Lojas(){
    const dados = useContext(Dados);

    return(
        <div className="lojas">
            <div className="icom">
                <img src="/img/loja.png" alt="" />
            </div>
                    <h3>Lojas Online</h3>
                    <nav className="loja_nav">
                        <ol>
                            <li><NavLink to={"lojas"}>Lojas</NavLink></li>
                            <li><NavLink to={"criar_loja"}>Criar</NavLink></li>
                            <li><NavLink to={"deletar_loja"}>Deletar</NavLink></li>
                        </ol>
                    </nav>
       
            <section className="sec_lojas">

                  <Outlet/>
            </section>
        </div>
    )
}


export default Lojas;