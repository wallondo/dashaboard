import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./sideBar.css";
import admin_img from "../../public/img/admin.jpg"
function SideBar(){
    const nav = useNavigate();
    const sair = () =>{
        console.log("ok")
        nav("/admi",{replace:true})
    }

    return(
        <div className="sideBar">
           <div className="user">
                <img src={admin_img} alt=""/>
                <h4>Faustino Ngunza</h4>
           </div>
           <div className="home n_border">
                <h3 style={{color:"white",marginLeft:"8px"}}>Home</h3>
           </div>
           <section className="sec_admin">
                <h4>ADMIN</h4>
                <ol>
                    <li>
                       <img src="../../public/img/trabalho.jpg" alt="" /> <NavLink to={"admin"}>Área Administrativa</NavLink>
                    </li>
                    <li>
                    <img src="../../public/img/loja.jpg" alt="" />  <NavLink to={"loja"}>Lojas</NavLink>
                    </li>
                    <li>
                    <img src="../../public/img/produtos.jpg" alt="" />    <NavLink to={"produtos"}>Produtos</NavLink>
                    </li>
                    <li>
                    <img src="../../public/img/relatorio.jpg" alt="" />    <NavLink to={"relatorios"}>Realatórios</NavLink>
                    </li>
                    <li>
                    <img src="../../public/img/pedidos.jpg" alt="" />   <NavLink to={"pedidos"}>Pedidos</NavLink>
                    </li>
                </ol>
           </section>
           <section className="sec_pessoas">
            <div className="pessoas n_border">
                    <h3 style={{color:"white",marginLeft:"0px"}}>Pessoas</h3>
            </div>
            <ol>
                <li>
                    <img src="/img/gestores.png" alt="" /> <NavLink to={"adms"}>Administradores</NavLink>
                </li>
                <li>
                <img src="/img/entregadores.png" alt="" /> <NavLink to={"entregadores"}>Entregadores</NavLink>
                </li>
                <li>
                <img src="/img/users.png" alt="" /> <NavLink to={"usuarios"}>Usuários</NavLink>
                </li>
            </ol>
           </section>
           <div style={{color:"white",cursor:"pointer"}} className="sair">
               <img src="/img/sair.png" alt="" /><NavLink to={"/"} >sair</NavLink>
           </div>
        </div>
    )
}


export default SideBar;