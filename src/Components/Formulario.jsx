import React, { useEffect, useState } from "react";
import '../Style/Componente.css';

const productosPorCategoria = {
  Limpieza: ["Lavandina", "Detergente", "Jabón en Polvo", "Desinfectante", "Desodorante", "Otro (escribir)"],
  Comestibles: ["Fideos", "Arroz", "Azúcar", "Pan", "Pasta", "Cereal", "Cafe", "Otro (escribir)"],
  Descartables: ["Vasos", "Servilletas", "Bandejas", "Cuchillos", "Cuchillas", "Tenedores", "Platos", "Tazas", "Otro (escribir)"],
  Bebidas: ["Coca Cola", "Pepsi", "Agua Mineral", "Cepita", "Fresh", "Red Bull", "Sprite", "Mirinda", "Smirnoff", "Termidor", "Viña del Bardo", "Otro (escribir)"],
  Lacteos: ["Leche", "Queso", "Yogurt", "Manteca", "Otro (escribir)"]
};

const Formulario = ({ agregarProducto, productoEditando }) => {
  const [categoria, setCategoria] = useState("Limpieza");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [esOtro, setEsOtro] = useState(false);

  useEffect(() => {
    if (productoEditando) {
      setCategoria(productoEditando.categoria);
      setProducto(productoEditando.producto);
      setCantidad(productoEditando.cantidad);
      setPrecio(productoEditando.precio);
      setEsOtro(!productosPorCategoria[productoEditando.categoria]?.includes(productoEditando.producto));
    }
  }, [productoEditando]);

  const handleProductoChange = (value) => {
    if (value === "Otro (escribir)") {
      setEsOtro(true);
      setProducto("");
    } else {
      setEsOtro(false);
      setProducto(value);
    }
  };

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
    setEsOtro(false);
  }

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
              setEsOtro(false);
              setProducto("");
            }}
          >
            {Object.keys(productosPorCategoria).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Producto</label>
          <select
            value={esOtro ? "Otro (escribir)" : producto}
            onChange={(e) => handleProductoChange(e.target.value)}
          >
            <option value="">Seleccionar producto</option>
            {productosPorCategoria[categoria]?.map((prod) => (
              <option key={prod} value={prod}>{prod}</option>
            ))}
            
          </select>

          {esOtro && (
            <input
              type="text"
              placeholder="Escriba el producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              required
              style={{ marginTop: '0.5rem' }}
            />
          )}
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

export default Formulario
