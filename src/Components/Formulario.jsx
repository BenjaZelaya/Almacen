import React, { useEffect, useState } from "react";

const Formulario = ({ agregarProducto, productoEditando }) => {
  const [categoria, setCategoria] = useState("Limpieza");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    if (productoEditando) {
      setCategoria(productoEditando.categoria);
      setProducto(productoEditando.producto);
      setCantidad(productoEditando.cantidad);
      setPrecio(productoEditando.precio);
    }
  }, [productoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProducto = {
      fecha: new Date().toLocaleDateString(),
      categoria,
      producto,
      cantidad: Number(cantidad),
      precio: Number(precio),
    };
    agregarProducto(nuevoProducto);
    setProducto("");
    setCantidad(1);
    setPrecio(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div>
        <label className="block mb-1 font-medium">Categoría</label>
        <select
          className="border rounded p-2 w-full"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Limpieza">Limpieza</option>
          <option value="Comestibles">Comestibles</option>
          <option value="Descartables">Descartables</option>
          <option value="Bebidas">Bebidas</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Producto</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Cantidad</label>
        <input
          type="number"
          className="border rounded p-2 w-full"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Precio Unitario ($)</label>
        <input
          type="number"
          className="border rounded p-2 w-full"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {productoEditando ? "Aceptar" : "Agregar"}
      </button>
    </form>
  );
};

export default Formulario;

