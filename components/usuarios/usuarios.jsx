import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./usuarios.css";
import { Dados } from "../../src/dados";


function Usuarios(){
        const dados = useContext(Dados)
        const [usuario,setUsuario] = useState(dados.usuarios)
        const [usuarios,setUsuarios] = useState(usuario)
        
        const Pesquisar = (txt)=>{
            let lojs = usuario.filter((lo,po)=>{return lo.nome.toLowerCase().includes(txt)})
            setUsuarios(lojs)
        }
    
    
    return(
        <div className="admis usuarios">
        <div className="icom">
              <img src="/img/usuarios.png" alt="" />
          </div>
        <div className="searche_div">
              <input type="text" placeholder="Pesquisar Usuarios : "
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
                    usuarios.map((en,po)=>(
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


export default Usuarios;