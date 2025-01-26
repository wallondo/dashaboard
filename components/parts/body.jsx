import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./body.css";
function Body(){
    return(
        <main className="body">
           <div className="greetings">
                <div className="img_greetings">
                    <img src="../../public/img/ola.png" alt="img greetings" />
                </div>
                <div className="word_greetings">
                    <h3>Olá Faustino</h3>
                    <p>Ola Faustino , espero que estejes bem !</p>
                </div>
           </div>
           <section className="sec_operations1">
               <div>
                <div><img src="../../public/img/pedidos1.jpg" alt="" /></div>
                <div><p>Números de pedidos <br/> <span> 540 </span></p></div>
               </div>
               <div>
                <div><img src="../../public/img/pagamentos.jpg" alt="" /></div>
                <div><p>Pagamentos <br/> <span> 540.</span>00.kz</p></div>
               </div>
               <div>
                <div><img src="../../public/img/produtos1.jpg" alt="" /></div>
                <div><p>Números de Produtos <br/>  <span>540 </span></p></div>
               </div>
               <div>
                <div><img src="../../public/img/clientes.jpg" alt="" /></div>
                <div><p>Número de Clientela <br/> <span> 540 </span> </p></div>
               </div>
           </section>
           <section className="sec_reporting">
                <div>
                    <h2>Recados dos dia</h2>
                    <p>Aqui estarão as tuas mensagens</p>
                    <div className="notfication">
                        <span>0</span>
                        <img src="/img/tempo_real.png" alt="" />
                    </div>
                    <div  className="grafico">
                            <h3>Sem sms até ao momento</h3>
                    </div>
                </div>
                <div>
                    <h2>Reportagem do dia</h2>
                    <p>Somatório geral até ao momento </p>
                    <div className="somatorios">
                            <div className="host">
                                <h3>Cuso Hospedagem</h3>
                                <img src="/img/host.png" alt="" />
                                <small>27634.00.kz</small>
                            </div>
                            <div  className="alimento">
                                <h3>Custo Alimentar</h3>
                                <img src="/img/alimento.png" alt="" />
                                <small>27634.00.kz</small>
                            </div>
                            <div  className="transporte">
                                <h3>Custo Transporte</h3>
                                <img src="/img/transporte.jpg" alt="" />
                                <small>27634.00.kz</small>
                            </div>
                            <div  className="net">
                                <h3>Custo Networking</h3>
                                <img src="/img/net.png"/>
                                <small>27634.00.kz</small>
                            </div>
                    </div>
                </div>
           </section>
        </main>
    )
}


export default Body;