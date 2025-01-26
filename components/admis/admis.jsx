import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./admis.css";
import { Dados } from "../../src/dados";



function Admis(){
        const dados = useContext(Dados)
        const [adms,setAdms] = useState(dados.admin)
        const [admis,setAdmis] = useState(adms)
        
        const Pesquisar = (txt)=>{
            let lojs = adms.filter((lo,po)=>{return lo.nome.toLowerCase().includes(txt)})
            setAdmis(lojs)
        }
    

    return(
        <div className="admis">
              <div className="icom">
                    <img src="/img/admins1.png" alt="" />
                </div>
              <div className="searche_div">
                    <input type="text" placeholder="Pesquisar Administrador : "
                        onChange={(evt)=>{Pesquisar(evt.target.value)}}
                    />
                </div>
            <section className="list_adms">
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>comtactos</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    admis.map((en,po)=>(
                        <tr key={po}>
                            <td><img src={`${en.img}`} alt="" /></td>
                            <td>{en.nome}</td>
                            <td>{en.num}</td>
                            <td>
                                <button>atualizar</button>
                                <button>deletar</button>
                            </td>
                        </tr>
                    ))
                }
                    </tbody>
                </table>
            </section>
        </div>
    )
}


export default Admis;