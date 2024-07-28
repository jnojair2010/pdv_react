import React from "react";
import './css/cadastro.css';
import { Outlet, useParams, Link } from "react-router-dom";


export const Cadastro = () =>{
    return(
        <div className="divCadastro">

             <div className="menuCadastro">
                <header>
                    <nav>
                        <ul>
                            <Link to="/cadastro/loja"><li className="menCadastro">nova loja</li></Link>
                            <Link to="/cadastro/colaborador"><li className="menCadastro">Colaborador</li></Link>
                            <Link to="/cadastro/fornecedor"><li className="menCadastro">Fornecedor</li></Link>
                        </ul>
                    </nav>
                </header>

              
            </div>
            <div id="bodyCadastro">
                    <Outlet />
            </div>

        </div>
    )
}