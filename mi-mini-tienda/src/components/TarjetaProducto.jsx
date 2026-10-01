function formatearPrecio(precio) {
  return `$${precio.toLocaleString('es-AR')}`
}

function TarjetaProducto({ producto, onAgregarAlCarrito }) {
  return (
    <article className="tarjeta-producto">
      <span className="tarjeta-producto-emoji" aria-hidden="true">
        {producto.emoji}
      </span>
      <h3>{producto.nombre}</h3>
      <p className="tarjeta-producto-precio">{formatearPrecio(producto.precio)}</p>
      <button
        type="button"
        className="boton boton-chico"
        onClick={() => onAgregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </article>
  )
}

export default TarjetaProducto
