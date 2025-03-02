import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ itemCount }) => {  
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} color="#FFD700" />
      <span className="badge bg-danger">{itemCount}</span> {}
    </div>
  );
};

export default CartWidget;