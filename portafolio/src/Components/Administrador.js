import React, { useState } from 'react';
import Calendar from 'react-calendar';
import BasicCard from './Card';
import SimplePaper from './Avisos';
const Administrador = () => {
  const [nota, setNota] = useState('');
  const [notas, setNotas] = useState([]);

  const [aviso, setAviso] = useState('');
  const [avisos, setAvisos] = useState([]);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const agregarNota = () => {
    setNotas([...notas, nota]);
    setNota('');
  };

  const agregarAviso = () => {
    setAvisos([...avisos, aviso]);
    setAviso('');
  };

  return (
    <div >
      <h1>Bienvenida</h1>

      <div>
        <h2>Calendario</h2>
        <Calendar onChange={setFechaSeleccionada} value={fechaSeleccionada} />
      </div>

     
      <div className="notas-container">
        <h2>Notas</h2>
        <div className="nota-input-container">
          <input
            type="text"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="Escribe tu nota"
          />
          <button onClick={agregarNota}>Agregar Nota</button>
        </div>
        <ul className="notas-list">
          {notas.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
      </div>
      <div className='contenedor-ad'> 
<SimplePaper/>
      
      <BasicCard/></div>
    </div>
  );
};

export default Administrador;
