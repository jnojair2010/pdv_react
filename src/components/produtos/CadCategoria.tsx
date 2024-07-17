import React from "react";
import './styles_categoria.css'

export const CadastarCategoria = ()=>{

    return(
        <div id="divCategoria">
            <div id="divTituloCategoria">
                <h1 id="titulo"> Cadastrar Categoria</h1>
            </div>
            <div id="formCategoria">
                    <div className="inputCategoria">
                        <div>
                        <span className="span">Category:</span>
                        </div>
                        <input type="text" placeholder="Categoria" className="inputs" />
                    </div>
                    <div >
                        <input type="button" value="Salvar" className="btn" />
                    </div>
            </div>
        </div>
    )

}