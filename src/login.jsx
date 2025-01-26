import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./login.css";


function Login(){
    const nav = useNavigate();
    const login_form = document.getElementById("login_form");

    const go =()=>{
        nav("/home",{replace:true})
    }

    return(
        <div className="login">
            <div className="login_div">
                <div className="ola">
                    <img src="/img/ola4.png" alt="" />
                </div>
                <div className="login_div z">
                <h2>Fazer Login</h2>
                <form action="" className="login_form" id="login_form">
                    <div>
                        <label htmlFor="numero">Numero</label>
                        <input type="number" placeholder="Numero cadastrado : " required name="number" id="number"/>
                    </div>
                    <div>
                        <label htmlFor="pass">Palavra Passe</label>
                        <input type="password" placeholder="Palavra passe : " required  name="pass" id="pass"/>
                    </div>
                    <div>
                        <label htmlFor="frase">Frase do dia</label>
                        <input type="text" placeholder="Escreva a tua frase do dia" name="frase" id="frase"/>
                    </div>
                    <div>
                        <input type="submit" value="Entra" onClick={go} className="bt_login"/>
                    </div>
                </form>
                </div>
            </div>  
        </div>
    )
}


export default Login;