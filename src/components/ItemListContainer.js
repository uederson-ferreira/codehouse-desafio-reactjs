// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const mockData = [
  {
    id: 1,
    title: 'Coleção RBD',
    description: 'Descrição do item 1',
    price: 100,
    pictureUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Outro Item',
    description: 'Descrição do item 2',
    price: 200,
    pictureUrl: 'https://via.placeholder.com/150'
  },
  // Adicione mais itens conforme necessário
];

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="item-list-container container mt-4">
      <h2>{greeting}</h2>
      <ItemList items={items} /> {/* Use o ItemList para renderizar os itens */}
    </div>
  );
};

export default ItemListContainer;
