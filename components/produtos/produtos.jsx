import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./produtos.css";

var produtos_all = [
    {nome:"Loja Virtual",n_venda:20,id:1,data:"22/09/2024"},
    {nome:"Curso de Marting",n_venda:30,id:2,data:"02/09/2024"},
    {nome:"Landg Page",n_venda:40,id:3,data:"12/09/2024"},
    {nome:"Colsutória",n_venda:50,id:4,data:"20/09/2024"},
    {nome:"Curso de DEV WEB",n_venda:60,id:5,data:"17/09/2024"},
    {nome:"Portifólio",n_venda:70,id:6,data:"07/09/2024"}
]

function Produtos(){
    const [produtos,setProdutos] = useState([])

    useEffect(()=>{
        setProdutos(produtos_all)
    },[])

    return(
        <div className="produtos">
            <div className="icom">
                <img src="/img/produto.png" alt="" />
            </div>
            <h3>Produtos Cadastrados</h3>
            <nav className="produtos_nav"> 
                <ol>
                    <li>
                        <NavLink to={"todos_produtos"}>Todos produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"mais_vendidos"}>Mais vendidos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"menos_vendidos"}>Menos vendidos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"produtos_parados"}>Produtos Parados</NavLink>
                    </li>
                    <li>
                        <NavLink to={"cadastrar_produto"}>Cadastrar Produto</NavLink>
                    </li>
                </ol>
            </nav>

            <section className="produtos_sec">
                <Outlet nome={produtos_all}/>
            </section>

        </div>
    )
}


export default Produtos;