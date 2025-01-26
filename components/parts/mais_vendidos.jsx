import React, { useContext, useState } from "react";
import "./mais_vendidos.css";
import { Link } from "react-router-dom";
import { Dados } from "../../src/dados";



function M_vendidos(params) {
    const Produtos = useContext(Dados)

    const [produtos_all,setProdutos_all] = useState(Produtos.produtos)
    const [pro_all,setPro_all] = useState(produtos_all)
    const search = (txt)=>{
        let lojs = produtos_all.filter((lo,po)=>{return lo.nome.toLowerCase().includes(txt)})
        setPro_all(lojs)
    }
    
    return(  <div className="m_vendidos">
        <h3>Os Produtos Mais Vendidos</h3>
        <div className="searche_div">
                            <input type="text" placeholder="Pesquisar Produtos : "
                            onChange={(evt)=>{search(evt.target.value)}}
                            />
        </div>
            <section className="sec_m_vendidos">
                 {
                                pro_all.map((product,pos)=>(
                                    (product.n_venda>50? <div className="product" key={pos}>
                                        <h3>{product.nome}</h3>
                                        <h4>Preço : {product.preco}.00.kz</h4>
                                        <p>Número de vendas : {product.n_venda}</p>
                                        <p>data de criação : {product.data}</p>
                                            <div>
                                                <Link to={`atualizar_produto/${product.id}`}>atualizar</Link>
                                                <Link to={`deletar_produto/${product.id}`}>deletar</Link>
                                            </div>
                                        </div>:"")
                                ))
                            }
            </section>
    </div>)
}

export default M_vendidos;