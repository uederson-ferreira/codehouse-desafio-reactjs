// src/components/ItemDetail.js
import React from 'react';

function ItemDetail({ item }) {
  return (
    <div className="card" style={{ width: '24rem' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">R${item.price}</p>
        <button className="btn btn-primary">Comprar agora</button>
      </div>
    </div>
  );
}

export default ItemDetail;
