import { useState, useEffect } from "react";
import Catalogo from "./catalogo.jsx"
import ImagenCoca from "./assets/coca.jpg"
import ImagenSabritas from "./assets/sabritas.jpg"
import ImagenFabuloso from "./assets/fabuloso.jpg"
import ImagenClorox from "./assets/clorox.jpg"

const arregloProductos = [
  { id: 1, nombre: "Coca Cola", precio: 25, imagen: ImagenCoca },
  { id: 2, nombre: "Sabritas", precio: 20, imagen: ImagenSabritas },
  { id: 3, nombre: "Fabuloso", precio: 35, imagen: ImagenFabuloso },
  { id: 4, nombre: "Clorox", precio: 18, imagen: ImagenClorox }
]

function App() {
  const [productos, setProductos] = useState([])
  const [contador, setContador] = useState(3)
  const [cargando, setCargando] = useState(true)

  const obtenerDatos = async () => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver(arregloProductos)
      }, 3000)
    })
  }

  const mostrarMensaje = (nombreProducto) => {
    alert("Agregaste al carrito: " + nombreProducto)
  }

  useEffect(() => {
    let tiempo = setInterval(() => {
      setContador((previo) => previo - 1)
    }, 1000)

    const iniciarCatalogo = async () => {
      const datos = await obtenerDatos()
      setProductos(datos)
      setCargando(false)
      clearInterval(tiempo)
    }

    iniciarCatalogo()

    return () => clearInterval(tiempo)
  }, [])

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Abarrotes MONO</h1>
      {cargando ? (
        <div className="alert alert-info">
          <h2>El catálogo cargará en {contador} segundos...</h2>
        </div>
      ) : (
        <Catalogo lista={productos} accionComprar={mostrarMensaje} />
      )}
    </div>
  )
}


export default App