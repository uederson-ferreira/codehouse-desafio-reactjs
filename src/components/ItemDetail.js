// src/components/ItemDetail.js
import React, { useState } from 'react';
import ItemCount from './ItemCount'; // Importe o ItemCount
import { Link } from 'react-router-dom';
import './ItemDetail.css'; // Adicione um arquivo CSS para estilização personalizada

function ItemDetail({ item }) {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = (quantity) => {
    setQuantityToAdd(quantity);
  };

  return (
    <div className="card item-detail-card" style={{ width: '24rem' }}>
      <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">R${item.price}</p>
        {quantityToAdd === 0 ? (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="btn btn-primary">
            Finalizar Compra
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
