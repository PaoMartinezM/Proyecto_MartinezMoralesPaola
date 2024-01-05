import React from 'react';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';  

export default function TemporaryDrawer({ open, onMenuClick }) {
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    onMenuClick(open);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <div style={{ width: '250px' }}>
        <AppBar position="static" sx={{ width: '100%', backgroundColor: '#FFD9C6' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: '#843B62' }}
              onClick={toggleDrawer(false)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
        <ListItem component={Link} to="/home" >
            <ListItemText primary="Home" />
          </ListItem>
        
          <ListItem component={Link} to="/contacto" >
            <ListItemText primary="Contacto" />
          </ListItem>  <ListItem component={Link} to="/login" >
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem component={Link} to="/" >
            <ListItemText primary="Salir" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
