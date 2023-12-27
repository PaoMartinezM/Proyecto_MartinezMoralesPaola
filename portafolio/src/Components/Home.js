import React from 'react';
import '../index.css';
import ButtonAppBar from './Header'
import InteractiveList from './Aptitudes'
const Home = () => {
  return (
    <div className="App">
         <ButtonAppBar/>
    <div className="App-Inicio">
   
    
      <h4>
        Sobre Mí
      </h4>
      <div className='contenedor'>
        <div className='contenedor1'>
            <h4>¡Hola! Soy Paola Martínez Morales</h4>
            <p>  Graduada en Matemáticas Aplicadas y Computación.Me apasiona explorar la conexión entre los números y la tecnología. Mi enfoque se centra en la resolución creativa de problemas, donde he desarrollado habilidades analíticas sólidas. Estoy emocionada por seguir creciendo en este campo tan apasionante. </p>
         
<h4>Aptitudes:</h4>

           <InteractiveList/> </div>
      
        <div className='contenedor2'><h4>Experiencia</h4></div>
      </div>
    </div>
  </div>
  );
};

export default Home;