// src/components/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
