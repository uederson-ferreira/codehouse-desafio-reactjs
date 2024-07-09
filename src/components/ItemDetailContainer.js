// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const mockData = [
  { id: 1, title: 'Samsung Galaxy S20 FE', description: 'Samsung Galaxy S20 FE 128 GB Cloud Navy 6 GB RAM', price: 76999, pictureUrl: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Outro Item', description: 'Descrição do item 2', price: 20000, pictureUrl: 'https://via.placeholder.com/300' },
  // Adicione mais itens conforme necessário
];

const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.find(item => item.id === parseInt(id)));
    }, 2000);
  });
};

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(itemId).then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div className="item-detail-container container mt-4">
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
}

export default ItemDetailContainer;
