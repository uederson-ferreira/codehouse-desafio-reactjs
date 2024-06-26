// src/components/ItemListContainer.js
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container container mt-4">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
