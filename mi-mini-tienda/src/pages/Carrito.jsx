function formatearPrecio(precio) {
  return `$${precio.toLocaleString('es-AR')}`
}

function Carrito({ carrito, onQuitar }) {
  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0,
  )

  return (
    <section className="pagina">
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p className="mensaje-vacio">Todavía no hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="lista-carrito">
            {carrito.map((producto) => (
              <li className="item-carrito" key={producto.id}>
                <div className="item-carrito-info">
                  <span className="tarjeta-producto-emoji" aria-hidden="true">
                    {producto.emoji}
                  </span>
                  <div>
                    <h2>{producto.nombre}</h2>
                    <p>
                      {producto.cantidad} × {formatearPrecio(producto.precio)}
                    </p>
                  </div>
                </div>
                <strong className="item-carrito-subtotal">
                  {formatearPrecio(producto.precio * producto.cantidad)}
                </strong>
                <button
                  type="button"
                  className="boton boton-quitar"
                  onClick={() => onQuitar(producto.id)}
                  aria-label={`Quitar ${producto.nombre} del carrito`}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <p className="total-carrito">
            <span>Total a pagar</span>
            <strong>{formatearPrecio(total)}</strong>
          </p>
        </>
      )}
    </section>
  )
}

export default Carrito
