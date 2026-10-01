function Producto({ info}) {
    return (
        <div className="card shadow-sm mb-3">
            <img src={info.imagen} className="card img-top" alt={info.nombre} />
            <div className="card-body">
                <h5 className="card-title">{info.nombre}</h5>
                <p className="card-text">{info.precio} MXN</p>
                <button className="btn btn-success" onClick={() => boton(info.nombre)}>
                    Comprar
                </button>

            </div>
        </div>
    )
}
export default Producto