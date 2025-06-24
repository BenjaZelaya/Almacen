import React from "react";
import '../Style/Componente.css';

const Tabla = ({ productos, editarProducto, eliminarProducto }) => {
  return (
    <div className="tabla-container">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p, index) => (
            <tr key={index}>
              <td>{p.fecha}</td>
              <td>{p.categoria}</td>
              <td>{p.producto}</td>
              <td>${p.precio.toFixed(2)}</td>
              <td>{p.cantidad}</td>
              <td>${(p.precio * p.cantidad).toFixed(2)}</td>
              <td className="acciones">
                <button onClick={() => editarProducto(index)} className="btn-edit">Editar</button>
                <button onClick={() => eliminarProducto(index)} className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
