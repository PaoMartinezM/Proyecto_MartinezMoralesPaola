import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './Components/Inicio.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Contacto from './Components/Contacto.js';
import Admin from './Components/Admin.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
};

export default App;
