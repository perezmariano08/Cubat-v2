// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Producto = () => {
    const { productId } = useParams();

  // Aquí deberías obtener los detalles del producto según el productId
  // Puedes usar un estado local, Redux u otro método para almacenar y recuperar detalles del producto.

    return (
        <div>
        <h1>Detalles del Producto</h1>
        <p>Mostrando detalles para el producto con ID: {productId}</p>
        {/* Muestra más detalles del producto aquí */}
        </div>
    );
};

export default Producto;
