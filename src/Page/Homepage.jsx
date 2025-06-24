import React, { useEffect, useState } from "react";
import Formulario from "../Components/Formulario";
import Tabla from "../Components/Tabla";
import "../Style/Homepage.css";

const Homepage = () => {
  const [productos, setProductos] = useState(() => {
    const data = localStorage.getItem("productos");
    return data ? JSON.parse(data) : [];
  });

  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (producto) => {
    if (productoEditando !== null) {
      const nuevosProductos = productos.map((p, index) =>
        index === productoEditando ? producto : p
      );
      setProductos(nuevosProductos);
      setProductoEditando(null);
    } else {
      setProductos([...productos, producto]);
    }
  };

  const editarProducto = (index) => {
    setProductoEditando(index);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  };

  return (
    <div className="homepage-background">
      <div className="homepage-container">
        <h1 className="homepage-title">Gestión de Compras</h1>
        <Formulario
          agregarProducto={agregarProducto}
          productoEditando={productoEditando !== null ? productos[productoEditando] : null}
        />
        <Tabla
          productos={productos}
          editarProducto={editarProducto}
          eliminarProducto={eliminarProducto}
        />
      </div>
    </div>
  );
};

export default Homepage;
