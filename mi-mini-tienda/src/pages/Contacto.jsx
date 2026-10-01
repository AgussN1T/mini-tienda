import { useState } from 'react'

const valoresIniciales = {
  nombre: '',
  email: '',
  mensaje: '',
}

function Contacto() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(evento) {
    const { name, value } = evento.target
    setValores((actuales) => ({ ...actuales, [name]: value }))
    setEnviado(false)
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = {}
    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresá tu nombre.'
    }
    if (!valores.email.trim()) {
      nuevosErrores.email = 'Ingresá tu email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email.trim())) {
      nuevosErrores.email = 'Ingresá un email válido.'
    }
    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = 'Escribí un mensaje.'
    } else if (valores.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false)
      return
    }

    setValores(valoresIniciales)
    setEnviado(true)
  }

  return (
    <section className="pagina">
      <h1>Contacto</h1>
      <p>Escribinos si querés consultar por una planta.</p>
      <form className="formulario-contacto" onSubmit={manejarEnvio} noValidate>
        <div className="campo-contacto">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={valores.nombre}
            onChange={actualizarCampo}
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          />
          {errores.nombre && (
            <span className="error-campo" id="error-nombre" role="alert">
              {errores.nombre}
            </span>
          )}
        </div>

        <div className="campo-contacto">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={valores.email}
            onChange={actualizarCampo}
            aria-invalid={Boolean(errores.email)}
            aria-describedby={errores.email ? 'error-email' : undefined}
          />
          {errores.email && (
            <span className="error-campo" id="error-email" role="alert">
              {errores.email}
            </span>
          )}
        </div>

        <div className="campo-contacto">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={valores.mensaje}
            onChange={actualizarCampo}
            aria-invalid={Boolean(errores.mensaje)}
            aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          />
          {errores.mensaje && (
            <span className="error-campo" id="error-mensaje" role="alert">
              {errores.mensaje}
            </span>
          )}
        </div>

        <button className="boton" type="submit">
          Enviar mensaje
        </button>
        {enviado && (
          <p className="confirmacion-contacto" role="status">
            ¡Gracias! Tu mensaje fue enviado.
          </p>
        )}
      </form>
    </section>
  )
}

export default Contacto
