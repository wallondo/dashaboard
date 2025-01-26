import React from "react";
import "./cadastrar_produto.css";

export default function C_Produto(params) {
    
    return (<div className="criar_produto">
            <h2>Cadastrar Novo Produto</h2>
            <form action="">
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" required placeholder="Nome do produto : "/>
                </div>
                <div>
                    <label htmlFor="preco">Preço do Produto</label>
                    <input type="number" name="preco" id="preco" required  placeholder="Preço do Produto : "/>
                </div>
                <div>
                    <input type="submit" value={"Criar"} />
                </div>
            </form>
    </div>)
}

