import { Link } from 'react-router-dom'
import PRODUCTOS from '../datos/productos'
import TarjetaProducto from '../components/TarjetaProducto'

function Inicio({ onAgregarAlCarrito }) {
  const destacados = PRODUCTOS.filter((producto) => producto.destacado)

  return (
    <div className="inicio">
      <section className="hero">
        <p className="hero-etiqueta">Mini tienda de plantas</p>
        <h1>Llená tu casa de verde</h1>
        <p>
          Elegí tu próxima planta, herramientas y accesorios. Envíos en la
          ciudad y consejos para que no se te muera a la semana.
        </p>
        <Link className="boton" to="/productos">
          Ver productos
        </Link>
      </section>

      <section className="destacados">
        <h2>Destacados</h2>
        <p className="destacados-intro">Tres favoritos para arrancar.</p>
        <div className="grilla-productos">
          {destacados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onAgregarAlCarrito={onAgregarAlCarrito}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Inicio
