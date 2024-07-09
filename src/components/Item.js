// src/components/Item.js
import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">R${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary">Veja detalhes do produto</Link>
      </div>
    </div>
  );
}

export default Item;
