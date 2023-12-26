import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'

import Usuarios from './components/Usuarios/Usuarios'
import Home from './components/Home/Home'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>

              <li>
                <NavLink to="/">Início</NavLink>
              </li>

              <li>
                <NavLink to="/usuarios">Usuários</NavLink>
              </li>

              <li>
                <NavLink to="/usuarios-cadastrar">Cadastrar</NavLink>
              </li>

            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/usuarios" element={<Usuarios />} />            
            <Route path="/usuarios-cadastrar" element={<AdicionarUsuario />} />            
            <Route path="*" element={<PaginaNaoEncontrada />} />            
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

export default App;
