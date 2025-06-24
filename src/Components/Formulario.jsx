import React, { useEffect, useState } from "react";
import '../Style/Componente.css';

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
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Categoría</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="Limpieza">Limpieza</option>
            <option value="Comestibles">Comestibles</option>
            <option value="Descartables">Descartables</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>
        <div className="form-group">
          <label>Producto</label>
          <input
            type="text"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cantidad</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio Unitario ($)</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          {productoEditando ? "Aceptar" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
