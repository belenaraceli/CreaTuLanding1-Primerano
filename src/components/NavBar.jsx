import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar text-white p-3" style={{ backgroundColor: '#e7aeae' }}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">Inicio</a>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Catalogo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Ofertas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Blog</a>
          </li>
        </ul>
        <CartWidget itemCount={3} />  {}
      </div>
    </nav>
  );
};

export default NavBar;