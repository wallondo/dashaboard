import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./entregadores.css";
import { Dados } from "../../src/dados";



function Entregadores(){
    const dados = useContext(Dados)
    const [entregadores,setEntregadores] = useState(dados.entregadores)
    const [entre,setEntrega] = useState(entregadores)
    
    const Pesquisar = (txt)=>{
        let lojs = entregadores.filter((lo,po)=>{return lo.nome.toLowerCase().includes(txt)})
        setEntrega(lojs)
    }


    return(
        // seção dos entregadores
        <div className="admis">
        <div className="icom mota_div">
              <img src="/img/entregadores1.png" alt="" className="mota"/>
          </div>
        <div className="searche_div">
              <input type="text" placeholder="Pesquisar Entregadores : "
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
                    entre.map((en,po)=>(
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


export default Entregadores;