import React from "react";
import "./criar_loja.css";

function Criar_Loja(params) {
    return(  <div className="criar_loja">
        
        <h3>Criar Loja</h3>
        <form action="#">
            <div>
                <label htmlFor="nome_loja">Nome Da Loja</label>
                <input required type="text" name="nome_loja" id="nome_loja" className="nome_loja" placeholder="Escreva o nome da loja : " />
            </div>
            <div>
                <label htmlFor="descricao">Descrição</label>
                <input required type="text" name="descricao" id="descricao" className="descricao"  placeholder="Escreva a descrição da loja : "/>
            </div>
            <div>
                <label htmlFor="link">Link</label>
                <input required type="text" name="link" id="link" className="link"  placeholder="Escreva o link da loja : "/>
            </div>
            <div>
                <label htmlFor="img">Imagem</label>
                <input type="file" name="img" className="img"/>
            </div>
            <div>
                <input type="submit" value="Criar"/>
            </div>
        </form>
    </div>)
}

export default Criar_Loja;

