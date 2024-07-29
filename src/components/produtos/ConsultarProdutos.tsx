import React from "react";
import './styles_consult_produto.css';

export const ConsultarProdutos = ()=>{

    return(
        <div id="divConsultProdut">
        <div id="divTituloCategoria">
            <h1 id="titulo"> Consultar Produto</h1>
        </div>
        <div id="formConsultProduto">
                <div className="idvsInputConsultProduto">
                    <div>
                        <span className="spanConsultar">Cod interno:</span>
                        </div>
                        <input type="text" placeholder="Codigo interno" name="cod_interno" className="inputs" />
                        <div >
                        <input type="button" value="Buscar" className="btnConult" />
                    </div>
                </div>
               
                <div className="idvsInputConsultProduto">
                    <div>
                        <span className="spanConsultar">Cod Barra:</span>
                        </div>
                        <input type="text" placeholder="Codigo de Barra" name="cod_barra" className="inputs" />
                        <div >
                        <input type="button" value="Buscar" className="btnConult" />
                    </div>
                </div>
               
        </div>
    </div>
    )

}