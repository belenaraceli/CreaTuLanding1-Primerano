// src/components/CartWidget.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ itemCount }) => {  // 🛠️ Recibe "itemCount" como prop
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} color="white" />
      <span className="badge bg-danger">{itemCount}</span> {/* 🛠️ Muestra el prop */}
    </div>
  );
};

export default CartWidget;