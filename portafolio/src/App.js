import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './Components/Inicio.js';
import Home from './Components/Home.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
