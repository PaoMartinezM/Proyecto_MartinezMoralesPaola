import React from 'react';
import ButtonAppBar from './Header';
import Administrador from './Administrador';
import Footer from './Footer';
const Admin = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="App-Inicio2">
     
    <Administrador/>
      </div><Footer/>
    </div>
  );
};

export default Admin;
