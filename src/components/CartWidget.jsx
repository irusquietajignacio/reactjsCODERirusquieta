import React from "react";

function CartWidget() {
  // En futuras entregas, este valor podría venir del estado global o de un Context
  const count = 0;

  return (
    <button type="button" className="btn btn-outline-primary position-relative">
      <i className="bi bi-cart3 fs-5" aria-hidden="true"></i>
      <span className="visually-hidden">Carrito</span>

      {/* Mostramos el badge solo si hay items */}
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
          <span className="visually-hidden">productos en el carrito</span>
        </span>
      )}
    </button>
  );
}

export default CartWidget;
