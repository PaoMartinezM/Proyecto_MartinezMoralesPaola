import React from 'react';
import '../index.css';
import ButtonAppBar from './Header'
import InteractiveList from './Aptitudes'
import yo from '../Imagenes/yo.jpg';
import gif1 from '../Imagenes/img1.gif';
import NestedList from './Experiencia';
import RoomIcon from '@mui/icons-material/Room';
import TodayIcon from '@mui/icons-material/Today';
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
        <img src={yo} className="img-P" alt="logo" />
            <h4>¡Hola! Soy Paola Martínez Morales</h4>
            <p>  Graduada en Matemáticas Aplicadas y Computación.Me apasiona explorar la conexión entre los números y la tecnología. Mi enfoque se centra en la resolución creativa de problemas, donde he desarrollado habilidades analíticas sólidas. Estoy emocionada por seguir creciendo en este campo tan apasionante. </p>
           <div className='apt'>  <div className='contenedor4'><h4>Aptitudes:</h4>

<InteractiveList/> </div>
           <div className='contenedor3'>
           <img src={gif1} className="gif1" alt="logo" /> </div>
         </div></div>
      
        <div className='contenedor2'>
       <div className='ed'><h4>Educación</h4>
        <h6>Licenciatura en Matemáticas Aplicadas
y Computación</h6><h6>
<TodayIcon/> 2019 - 2023 <RoomIcon/> UNAM</h6></div> 
          <h4>Experiencia</h4>
        <NestedList/>
        <h4>Conocimientos Técnicos</h4>
       </div>
      </div>
    </div>
  </div>
  );
};

export default Home;