// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Certifique-se de que a importação está correta

const CartWidget = () => {
  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="ml-2">3</span> {/* Número de itens no carrinho */}
    </div>
  );
};

export default CartWidget;
