import {useEffect, useState} from "react";
import "../styles/body.css";
import Modalpersonaje from "./modals/Modalpersonaje";

const Body = () => {
  const [personajes, setPersonajes] = useState([]);
  const [buscarpersonaje, setBuscarPersonaje] = useState("");
  const [modalvisible, setModalvisible] = useState(false);
  const [caricaturaseleccionada, setCaricaturaseleccionada] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) =>
        console.error("error en la consulta a la API de Rick and Morty", error)
      );
  }, []);

  const filtrarpersonajes = buscarpersonaje
    ? personajes.filter((personajes) =>
        personajes.name.toLowerCase().includes(buscarpersonaje.toLowerCase())
      )
    : personajes;

    const abrirModal = (caricatura) => {
      setCaricaturaseleccionada(caricatura);
      setModalvisible(true);
    };

    const cerrarModal = () => {
      setModalvisible(false);
      setCaricaturaseleccionada(null);
    };
  

  return (
    <div>
      <div className="contenedor_input">
      <input
        type="text"
        placeholder="Busca un personaje..."
        value={buscarpersonaje}
        onChange={(e) => setBuscarPersonaje(e.target.value)}
      />
      </div>
      <div className="contenedor_carta">
      {filtrarpersonajes.length > 0 ? (
        filtrarpersonajes.map((caricatura) => (
        
          <div className="carta" key={caricatura.id} onClick={() => abrirModal(caricatura)} > 
            <div className="carta_img_contenedor">
            <img src={caricatura.image} alt={caricatura.name} />
            </div>
            <div className="carta_name_contenedor">
            <h1>{caricatura.name}</h1>
            </div>
          </div>
        
        ))
      ) : (
        <p>No se encontraron personajes</p>
      )}
      </div>

      {modalvisible && (
        <Modalpersonaje
          personaje={caricaturaseleccionada}
          cerrarModal={cerrarModal}
        />
      )}
      </div>
  );
};

export default Body;
