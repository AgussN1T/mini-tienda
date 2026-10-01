import { NavLink } from 'react-router-dom'

function Navbar({ cantidadCarrito }) {
  return (
    <header className="navbar">
      <NavLink to="/" end className="navbar-marca">
        🌿 Mini Tienda
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/carrito">
          Carrito
          <span className="navbar-badge">{cantidadCarrito}</span>
        </NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
