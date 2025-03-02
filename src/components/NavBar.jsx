// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget"; // Importa el componente del carrito

const NavBar = () => {
  return (
    <nav className="navbar bg-dark text-white p-3">
      <div className="container">
        <a className="navbar-brand text-white" href="#">Mi Tienda</a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contacto</a>
          </li>
        </ul>
        <CartWidget itemCount={3} />  {/* 🛠️ Pasa el número como prop */}
      </div>
    </nav>
  );
};

export default NavBar;