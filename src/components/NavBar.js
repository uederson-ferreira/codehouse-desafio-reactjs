// src/components/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'; // Importe o CartWidget

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Nome da Loja</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-link">Categoria 1</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link">Categoria 2</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link">Categoria 3</button>
          </li>
        </ul>
        <CartWidget /> {/* Inclua o CartWidget */}
      </div>
    </nav>
  );
};

export default NavBar;
