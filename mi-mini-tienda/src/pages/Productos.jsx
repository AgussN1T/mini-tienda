import { useState } from 'react'
import PRODUCTOS from '../datos/productos'
import TarjetaProducto from '../components/TarjetaProducto'

function Productos({ onAgregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = PRODUCTOS.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()),
  )

  return (
    <section className="catalogo">
      <h1>Productos</h1>
      <label className="buscador">
        Buscar
        <input
          type="search"
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
          placeholder="Filtrar por nombre..."
        />
      </label>

      {productosFiltrados.length === 0 ? (
        <p className="mensaje-vacio">
          No encontramos productos que coincidan con “{busqueda}”.
        </p>
      ) : (
        <div className="grilla-productos">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onAgregarAlCarrito={onAgregarAlCarrito}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Productos
