import React from "react";
import "./deletar_loja.css";

function Deletar_loja(params) {
    return(  <div className="deletar_loja">
        <h3>Deletar Loja</h3>
                <h3>Esta ção refetirá em todas as lojas cadastradas</h3>
            <form action="#">
                <div>
                        <label htmlFor="del">Escreva exatamente "deletar todas lojas" sem espaços</label>
                        <input type="text" placeholder="Texto a inserir : " required id="texto" className="texto"name="texto" />
                </div>
                <div>
                    <label htmlFor="pass">Palavra Passe</label>
                    <input type="text" placeholder="Palavra passe" required id="pass" className="pass"/>
                </div>
                <div>
                    <input type="submit" value={"Deletar"} />
                </div>
            </form>
    </div>) 
}

export default Deletar_loja;
