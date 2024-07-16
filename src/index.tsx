import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route, Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Home} from './templates/Home';
import { Produtos } from './templates/Produtos';
import { Cadastro } from './templates/Cadastro';
import { Venda } from './templates/Venda';
import { Login } from './templates/Login';
import Menu from './templates/Menu/Menu';
import { FormCadastroProduto } from './components/produtos/FormCadastroProduto';
import { CadastarCategoria } from './components/cadCategoria/cadCategoria';
import { ConsultarProdutos } from './components/consulProdutos/ConsultarProdutos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <BrowserRouter>
       <Menu />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route  path="/produtos" element={<Produtos />}>
                <Route path="/produtos" element={<FormCadastroProduto />} />
                <Route path="/produtos/cadProdutos" element={<FormCadastroProduto />} />
                <Route path="/produtos/cadCategoria" element={<CadastarCategoria  />} />
                <Route path="/produtos/consultar" element={<ConsultarProdutos  />} />
              </Route>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/venda" element={<Venda />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
