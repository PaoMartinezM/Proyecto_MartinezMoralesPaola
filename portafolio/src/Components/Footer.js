import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', bottom: 0, width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: '#843B62' }}>
        <Toolbar>
         <p>© 2024 Worksphere. Todos los derechos reservados.</p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
