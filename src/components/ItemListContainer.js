// src/components/ItemListContainer.js
import React from 'react';
import ItemCount from './ItemCount'; // Importe o ItemCount

const ItemListContainer = ({ greeting }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} items to the cart.`);
  };

  return (
    <div className="item-list-container container mt-4">
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} /> {/* Use o ItemCount para teste */}
    </div>
  );
};

export default ItemListContainer;
