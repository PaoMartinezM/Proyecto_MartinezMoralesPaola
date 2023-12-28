import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import petco from '../Imagenes/petco.png'
import unam from '../Imagenes/unam.png'
export default function NestedList() {
  const [openStates, setOpenStates] = React.useState({
    item1: true,
    item2: true,
    item3: true,
  });

  const handleClick = (item) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [item]: !prevOpenStates[item],
    }));
  };

  return (
    <List sx={{ width: '80%', bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={() => handleClick('item1')}>
      
        <img src={petco} className='item-ex' alt="logo" /> 
        
        <ListItemText primary="Analista de TI en Petco ||" />
        {openStates.item1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.item1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Febrero 2022 - Actualmente" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={() => handleClick('item2')}>
      <img src={unam} className='item-ex' alt="logo" /> 
        <ListItemText primary="Proyecto de Alfabetización con Sistemas de Braille para la comunidad vidente de Matemáticas Aplicadas y Computación de la FES Acatlán ||" />
        {openStates.item2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.item2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Agosto 2022 - Octubre 2022" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={() => handleClick('item3')}>
      <img src={unam} className='item-ex' alt="logo" /> 
        <ListItemText primary="Proyecto de Desarrollo del Pensamiento Computacional y Programación de Aplicaciones de la FES Acatlán ||" />
        {openStates.item3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStates.item3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary="Septiembre 2022 - Diciembre 2022" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
