import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: '100%', backgroundColor: '#FFD9C6' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#843B62' }}
            onClick={() => handleMenuClick(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#843B62' }}>
            Portafolio
          </Typography>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={drawerOpen} onMenuClick={handleMenuClick} />
    </Box>
  );
}

export default Header;
