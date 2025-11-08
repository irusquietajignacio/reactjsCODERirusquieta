import React from "react";
import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary border-bottom">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <i
              className="bi bi-bag-check-fill text-primary fs-4"
              aria-hidden="true"
            ></i>
            <span className="fw-semibold">MiTienda</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Alternar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>

            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
