import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  const [carrito, setCarrito] = useState([])

  const cantidadCarrito = carrito.reduce(
    (total, item) => total + (item.cantidad ?? 1),
    0,
  )

  function agregarAlCarrito(producto) {
    setCarrito((items) => {
      const existente = items.find((item) => item.id === producto.id)
      if (existente) {
        return items.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        )
      }
      return [...items, { ...producto, cantidad: 1 }]
    })
  }

  function quitarDelCarrito(productoId) {
    setCarrito((items) => items.filter((item) => item.id !== productoId))
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar cantidadCarrito={cantidadCarrito} />
        <main className="contenido">
          <Routes>
            <Route
              path="/"
              element={<Inicio onAgregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/productos"
              element={<Productos onAgregarAlCarrito={agregarAlCarrito} />}
            />
            <Route
              path="/carrito"
              element={
                <Carrito carrito={carrito} onQuitar={quitarDelCarrito} />
              }
            />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
