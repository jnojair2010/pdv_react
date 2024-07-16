import React from "react";
import './styles.css'


export const FormCadastroProduto = () =>{
    return (
        <>
            <h1 id="titulo">cadastar produtos</h1>
            <div className="divForm">
                <form id="form">
                    <div className="divInputs">
                        <div>
                        <span className="span">Name:</span>
                        </div>
                        <input type="text" placeholder="Nome" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Brand:</span>
                        </div>
                        <input type="text" placeholder="Marca" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Line:</span>
                        </div>
                        <input type="text" placeholder="Linha" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Category:</span>
                        </div>
                        <select className="inputs">
                            <option>Select Category</option>
                        </select>
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Price:</span>
                        </div>
                        <input type="number" placeholder="Preço de Venda" min="1" max="5" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Price to buy:</span>
                        </div>
                        <input type="number" placeholder="Prelo de compra" min="1" max="5" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Cod Barra:</span>
                        </div>
                        <input type="text" placeholder="Código de Barra" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Cod Int:</span>
                        </div>
                        <input type="text" placeholder="Código Interno" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Batch:</span>
                        </div>
                        <input type="text" placeholder="Lote" className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Validity:</span>
                        </div>
                        <input type="text" placeholder="Validade"  className="inputs" />
                    </div>
                    <div className="divInputs">
                        <div>
                        <span className="span">Descrition:</span>
                        </div>
                        <textarea  placeholder="Descrição" className="inputsTextArea" ></textarea>
                    </div>
                    <div >
                        <input type="button" value="Salvar" className="btn" />
                    </div>
                </form>
            </div>
        </>

    );
}
//https://getbootstrap.com/docs/4.0/components/input-group/