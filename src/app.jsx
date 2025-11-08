import React from "react";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4">
        {/* Enviamos una prop (string) como mensaje de bienvenida */}
        <ItemListContainer greeting="¡Bienvenido/a a MiTienda! Descubre nuestros productos." />
      </main>
    </>
  );
}

export default App;
