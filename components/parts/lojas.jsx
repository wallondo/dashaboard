import React, { useState } from "react";
import "./lojas.css";
import { useContext } from "react";
import { Dados } from "../../src/dados";





function Loja(params) {
const Lojas = useContext(Dados)
const [loj,setLoj] = useState(Lojas.lojas)
const [Lojs,setLojs] = useState(loj)
    const Pesquisar = (txt)=>{
        let lojs = loj.filter((lo,po)=>{return lo.nome.toLowerCase().includes(txt)})
        setLojs(lojs)
    }
// console.log(loj)

    return(
        <>
             <div className="searche_div">
                <input type="text" placeholder="Pesquisar Loja : "
                    onChange={(evt)=>{Pesquisar(evt.target.value)}}
                />
            </div>
            {
                Lojs.map((lo,pos)=>(
                    <div className="loja" key={pos}>
        
                        <h3>{lo.nome}</h3>
                        <img src={`${lo.img}`} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Sapiente, autem libero! Magni assumenda veritatis 
                            consequatur eos adipisci. Adipisci illo architecto aliquam
                        </p>
                        <div className="actions">
                            <button> editar <img src="/img/pincel.png" alt="" /> </button>
                            <button>ir para o site </button>
                            <button> deletar <img src="/img/lixo.png" alt="" /> </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Loja;