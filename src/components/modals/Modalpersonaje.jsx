import React from "react"
import "../../styles/modalpersonaje.css"

const Modalpersonaje = ({ personaje, cerrarModal }) => {
    if (!personaje) return null;

    return (
        <div className="modal">
            <div className="modal_contenido">
                <button className="cerrar_modal" onClick={cerrarModal}>X</button>
                <h1>{personaje.name}</h1>
                <img src={personaje.image} alt={personaje.image} />
                <p>Estado: {personaje.status}</p>
                <p>Especie: {personaje.species}</p>
                <p>Genero: {personaje.gender}</p>
                <p>Origen: {personaje.origin.name}</p>
            </div>

        </div>
    )
}

export default Modalpersonaje;