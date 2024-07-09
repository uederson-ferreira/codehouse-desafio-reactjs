// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Nome da Loja</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/category1">Categoria 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/category2">Categoria 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/category3">Categoria 3</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
