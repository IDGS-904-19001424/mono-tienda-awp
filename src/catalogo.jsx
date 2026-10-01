import Producto from './pruducto.jsx'

function Catalogo({ lista, accionComprar }) {
  return (
    <div className="row">
      {lista.map((item) => (
        <div className="col-md-3" key={item.id}>
          <Producto info={item} boton={accionComprar} />
        </div>
      ))}
    </div>
  )
}

export default Catalogo