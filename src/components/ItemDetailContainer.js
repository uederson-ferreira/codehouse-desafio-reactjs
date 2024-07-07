// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const mockItem = {
  id: 1,
  title: 'Samsung Galaxy S20 FE',
  description: 'Samsung Galaxy S20 FE 128 GB Cloud Navy 6 GB RAM',
  price: 76999,
  pictureUrl: 'https://via.placeholder.com/300',
};

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItem);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div className="item-detail-container container mt-4">
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
}

export default ItemDetailContainer;
