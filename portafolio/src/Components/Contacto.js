import React from 'react'
import ButtonAppBar from './Header'
import { Link } from 'react-router-dom';
import FormContacto from './FormContacto';
import contact from '../Imagenes/contacto.gif';
import Footer from './Footer';
const Contacto = () => {
  return (
    <div className="App">
    <ButtonAppBar/>
<div className="App-Inicio2">
    <h1>Contacto</h1><FormContacto/>
   <Link to="/home" className="Btn-Entrar2">
     ENVIAR
   </Link> <img src={contact} className="contact" alt="logo" />
    <Footer/>
     </div> </div>
  )
}

export default Contacto
