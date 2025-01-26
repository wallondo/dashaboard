import React, { useState } from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import App from "./app";
import SideBar from "../components/sideBar/sideBar";
import Body from "../components/parts/body";
import Main from "../components/main/main";
import Produtos from "../components/produtos/produtos";
import Pessoas from "../components/pessoas/pessoas";
import Lojas from "../components/lojas/loja";
import Categorias from "../components/categorias/categorias";
import Pedidos from "../components/pedidos/pedidos";
import Loja from "../components/parts/lojas";
import Criar_Loja from "../components/parts/criar_loja";
import Deletar_loja from "../components/parts/deletar_loja";
import T_Produtos from "../components/parts/todos_produtos";
import M_vendidos from "../components/parts/mais_vendidos";
import Me_vendidos from "../components/parts/menos_vendidos";
import P_Parados from "../components/parts/produtos_parados";
import { Dados } from "./dados";
import C_Produto from "../components/parts/cadastrar_produto";
import Admis from "../components/admis/admis";
import Entregadores from "../components/entregadores/entregadores";
import Usuarios from "../components/usuarios/usuarios";
import Login from "./login";
import NotFound from "./notfound";


function Routas(params){
    var loja = [
        {nome:"CALSADOS FITNES",img:"/img/loja1.jpg"},
        {nome:"CELULARES NOVOS",img:"/img/loja2.jpg"},
        {nome:"ELETRONICOS DE SOM",img:"/img/loja3.jpg"},
        {nome:"IMOBILIARIO DOMESTICOS",img:"/img/loja4.jpg"},
        {nome:"PRODUTOS PRA PEL",img:"/img/loja5.jpg"},
    ]
    var produto = [
        {nome:"Loja Virtual",n_venda:80,id:1,data:"22/09/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de Marting",n_venda:30,id:2,data:"02/09/2024",preco:Math.round(Math.random()*10)},
        {nome:"Landg Page",n_venda:40,id:3,data:"12/09/2024",preco:Math.round(Math.random()*10)},
        {nome:"Colsutória",n_venda:50,id:4,data:"20/09/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de DEV WEB",n_venda:70,id:5,data:"17/06/2024",preco:Math.round(Math.random()*10)},
        {nome:"Portifólio",n_venda:70,id:6,data:"18/05/2024",preco:Math.round(Math.random()*10)},
        {nome:"Sites Instituicionais",n_venda:40,id:7,data:"19/03/2024",preco:Math.round(Math.random()*10)},
        {nome:"Mentoria",n_venda:70,id:8,data:"26/02/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de Importação",n_venda:60,id:9,data:"08/05/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de Cripto-Moeda",n_venda:0,id:10,data:"11/08/2024",preco:Math.round(Math.random()*10)},
        {nome:"Portifólio",n_venda:0,id:6,data:"18/05/2024",preco:Math.round(Math.random()*10)},
        {nome:"Sites Instituicionais",n_venda:40,id:7,data:"19/03/2024",preco:Math.round(Math.random()*10)},
        {nome:"Mentoria",n_venda:0,id:8,data:"26/02/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de Importação",n_venda:0,id:9,data:"08/05/2024",preco:Math.round(Math.random()*10)},
        {nome:"Curso de Cripto-Moeda",n_venda:0,id:10,data:"11/08/2024",preco:Math.round(Math.random()*10)}
    ]
    var entregadores = [
        {img:"/img/user.jpg",nome:"Pedro Domingos Pedro",num:"9999999999 999999999999"},
        {img:"/img/user_f.jpg",nome:"Ana Maria Tiago",num:"88888888 88888888888 8888888"},
        {img:"/img/user.jpg",nome:"Deniz Diogo Perreira",num:"77777777777 77777777777"},
        {img:"/img/user_f.jpg",nome:"Josefina Andre Diniz",num:"4444444444444 444444444"},
        {img:"/img/user.jpg",nome:"Fernando Domingos Tobia",num:"9999999999 444444444"},
        {img:"/img/user.jpg",nome:"Diniz Diogo Pedro",num:"33333333333 77777777777"},
        {img:"/img/user.jpg",nome:"Diogo Domingos Josias",num:"9999999999 444444444"},
    ]
    var admin = [
        {img:"/img/user_f.jpg",nome:"Antonia Maria Errique",num:"88888888 55555555555"},
        {img:"/img/user_f.jpg",nome:"Fernanda Maria Mateu",num:"88888888 55555555555"},
        {img:"/img/user.jpg",nome:"Jose Diogo Calumga",num:"33333333333 77777777777"},
        {img:"/img/user_f.jpg",nome:"Diana Andre Dinizia",num:"111111111111 444444444"},
    ]
    var usuarios =[
        {img:"/img/user_f.jpg",nome:"Antonia Maria Errique",num:"88888888 55555555555"},
        {img:"/img/user.jpg",nome:"Fernando Domingos Tobia",num:"9999999999 444444444"},
        {img:"/img/user.jpg",nome:"Diniz Diogo Pedro",num:"33333333333 77777777777"},
        {img:"/img/user_f.jpg",nome:"Adriana Andre Tomas",num:"111111111111 444444444"},
        {img:"/img/user_f.jpg",nome:"Fernanda Maria Mateu",num:"88888888 55555555555"},
        {img:"/img/user.jpg",nome:"Jose Diogo Calumga",num:"33333333333 77777777777"},
        {img:"/img/user_f.jpg",nome:"Diana Andre Dinizia",num:"111111111111 444444444"}
   
    ]
    const [produtos,setProdutos] = useState(produto)
    
    const [lojas,setLojas] = useState(loja)

    return( 
        <Dados.Provider value={{lojas,setLojas,produtos,setProdutos,entregadores,admin,usuarios}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}>
                    </Route>
                    <Route path="home" element={<App/>}>
                        <Route path="admin" element={<Body/>}/>
                        <Route path="loja" element={<Lojas/>}>
                            <Route path="lojas" element={<Loja/>}></Route>
                            <Route path="criar_loja" element={<Criar_Loja/>}></Route>
                            <Route path="deletar_loja" element={<Deletar_loja/>}></Route>
                        </Route>
                        <Route path="produtos" element={<Produtos/>}>
                            <Route path="todos_produtos" element={<T_Produtos/>}></Route>
                            <Route path="mais_vendidos" element={<M_vendidos/>}></Route>
                            <Route path="menos_vendidos" element={<Me_vendidos/>}></Route>
                            <Route path="produtos_parados" element={<P_Parados/>}></Route>
                            <Route path="cadastrar_produto" element={<C_Produto/>}></Route>
                            cadastrar_produto
                        </Route>
                        <Route path="relatorios" element={<Categorias/>}/>
                        <Route path="pessoas" element={<Pessoas/>}/>
                        <Route path="pedidos" element={<Pedidos/>}/>
                        <Route path="adms" element={<Admis/>}/>
                        <Route path="entregadores" element={<Entregadores/>}/>
                        <Route path="usuarios" element={<Usuarios/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Dados.Provider>
    )
}


export default Routas;
