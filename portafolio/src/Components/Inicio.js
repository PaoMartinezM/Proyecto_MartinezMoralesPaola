import React from 'react';
import { Link } from 'react-router-dom';
import logoG from '../Imagenes/logoG.gif';
import '../index.css';


const Inicio = () => {
  return (
    <div className="App">
    <div className="App-Inicio">

      <img src={logoG} className="App-logo" alt="logo" />
      <h1>
        Bienvenid@
      </h1>
     <Link to="/home" className="Btn-Entrar">
      ENTRAR
    </Link>
    
    </div>
  </div>
  );
};

export default Inicio;