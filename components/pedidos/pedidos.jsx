import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./pedidos.css";

function Pedidos(){
    return(
        <div className="pedidos">
               <div className="icom">
                <img src="/img/pedidos1.png" alt="" />
            </div>
            <h3>Pedidos solicitados até ao momento</h3>
            <section className="sec_pedidos">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                        Cliente
                                </th>
                                <th>
                                        Descrição
                                </th>
                                <th>
                                        Produto
                                </th>
                                <th>
                                       Preço
                                </th>
                                <th>
                                       Ação
                                </th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr>
                                <td>
                                    sadraque
                                </td>
                                <td>
                                    ola meu nome é ffff
                                </td> 
                                <td>
                                    Lang Page
                                </td>
                                <td>
                                    55kz
                                </td>
                                <td>
                                   <button> Feito <img src="/img/bom.png" alt="" /></button>
                                   <button>Deletar <img src="/img/lixo.png" alt="" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        </div>
    )
}


export default Pedidos;