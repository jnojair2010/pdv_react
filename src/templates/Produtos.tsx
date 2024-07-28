import React, { useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";

import './css/produto.css';



export const Produtos = ()=>{
    
    const params = useParams();



    if(params.cadProdutos =="cadProdutos"){
        console.log(params);
    }

        return (
            <div id="produtos">
                <div className="menuProdutos">
                    <header>
                        <nav>
                            <ul>
                                <Link to="/produtos/cadProdutos"><li className="menProdutos"> Cadastrar Produto</li></Link> 
                                <Link to="/produtos/cadCategoria"><li className="menProdutos" >Cadastar Categoria</li></Link>
                                <Link to="/produtos/consultar"><li className="menProdutos" >Consultar</li></Link>
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="bodyProdutos">
                    <Outlet />
                </div>
                
            </div>
        );

    }
