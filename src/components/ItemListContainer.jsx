import React from "react";

/**
 * Contenedor principal para el catálogo de productos.
 * Recibe un string vía props (greeting) y lo muestra como mensaje de bienvenida.
 */
function ItemListContainer({ greeting }) {
  return (
    <section className="hero p-4 p-md-5 mt-4">
      <h1 className="h3 mb-2">{greeting}</h1>
      <p className="text-secondary mb-0">
        Pronto verás el catálogo de productos aquí.
      </p>
    </section>
  );
}

export default ItemListContainer;
