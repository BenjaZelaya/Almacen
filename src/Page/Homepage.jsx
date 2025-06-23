import React, { useEffect, useState } from "react";
import Formulario from "../Components/Formulario";
import Tabla from "../Components/Tabla";

const HomePage = () => {
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
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestión de Compras</h1>
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
  );
};

export default HomePage;

