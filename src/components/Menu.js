// src/components/Menu.js
import React from 'react';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          {/* Puedes agregar aquí una etiqueta <img> para mostrar tu logo si es necesario */}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Alternar navegación">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbars-rs-food">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="index.html">Nosotros</a></li>
            <li className="nav-item active"><a className="nav-link" href="menu.html">Menú</a></li>
            <li className="nav-item"><a className="nav-link" href="reservas.html">Reservas</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Galería</a>
              <div className="dropdown-menu" aria-labelledby="dropdown-a">
                <a className="dropdown-item" href="reservacion.html">Reservación</a>
                <a className="dropdown-item" href="equipo.html">Equipo</a>
                <a className="dropdown-item" href="galeria.html">Galería</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown-b" data-toggle="dropdown">Blog</a>
              <div className="dropdown-menu" aria-labelledby="dropdown-b">
                <a className="dropdown-item" href="blog.html">Blog</a>
                <a className="dropdown-item" href="detalles-blog.html">Entrada de Blog Individual</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
