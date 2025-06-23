import React from "react";

const Tabla = ({ productos, editarProducto, eliminarProducto }) => {
  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Fecha</th>
          <th className="border p-2">Categoría</th>
          <th className="border p-2">Producto</th>
          <th className="border p-2">Precio Unitario</th>
          <th className="border p-2">Cantidad</th>
          <th className="border p-2">Total</th>
          <th className="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p, index) => (
          <tr key={index}>
            <td className="border p-2">{p.fecha}</td>
            <td className="border p-2">{p.categoria}</td>
            <td className="border p-2">{p.producto}</td>
            <td className="border p-2">${p.precio.toFixed(2)}</td>
            <td className="border p-2">{p.cantidad}</td>
            <td className="border p-2">${(p.precio * p.cantidad).toFixed(2)}</td>
            <td className="border p-2 space-x-2">
              <button
                onClick={() => editarProducto(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => eliminarProducto(index)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
