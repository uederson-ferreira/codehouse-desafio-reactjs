// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const mockData = [
  { id: 1, title: 'Coleção RBD', description: 'Descrição do item 1', price: 100, pictureUrl: 'https://via.placeholder.com/150', category: 'category1' },
  { id: 2, title: 'Outro Item', description: 'Descrição do item 2', price: 200, pictureUrl: 'https://via.placeholder.com/150', category: 'category2' },
  // Adicione mais itens conforme necessário
];

const getItems = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(category ? mockData.filter(item => item.category === category) : mockData);
    }, 2000);
  });
};

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(categoryId).then((data) => {
      setItems(data);
    });
  }, [categoryId]);

  return (
    <div className="item-list-container container mt-4">
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
