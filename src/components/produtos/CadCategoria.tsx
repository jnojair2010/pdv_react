import React from "react";
import './styles_categoria.css'

export const CadastarCategoria = ()=>{

    return(
        <div id="divCategoria">
            <div id="divTituloCategoria">
                <h1 id="titulo"> Cadastrar Categoria</h1>
            </div>
            <div id="formCategoria">
                    <div id="inputCategoria">
                        <div>
                        <span id="spanCategoria">Category:</span>
                        </div>
                        <input type="text" placeholder="Categoria" id="inputsCategoria" />
                    </div>
                    <div id="divBtn">
                        <input type="button" value="Salvar" id="btn" />
                    </div>
            </div>
        </div>
    )

}