// src/components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeItem, clear } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title} - {item.quantity} x R${item.price}
                <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm">Remover</button>
              </li>
            ))}
          </ul>
          <button onClick={clear} className="btn btn-danger mt-3">Limpar Carrinho</button>
        </>
      )}
    </div>
  );
};

export default Cart;
