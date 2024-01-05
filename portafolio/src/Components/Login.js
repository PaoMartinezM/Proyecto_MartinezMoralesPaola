import React from 'react';
import ButtonAppBar from './Header';
import Log from './Log';
import logoG from '../Imagenes/logoG.gif';
import Footer from './Footer';
const Login = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="App-Inicio2">
      <img src={logoG} className="App-logo2" alt="logo" />
        <Log />
      </div><Footer/>
    </div>
  );
};

export default Login;
