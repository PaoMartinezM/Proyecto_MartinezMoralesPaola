import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Grid from '@mui/material/Grid';

const programmingLanguages = [
    'Manejo de Paquetería Office',
    'Manejo de Google Slides y Google Sheets',
    'Manejo de GitHub',
    'Capacidad de Análisis',
    'Redes Sociales Marketing Digital'
];

export default function GutterList() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      <Grid item xs={6}>
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {programmingLanguages.map((language, index) => (
            <ListItem key={index} disableGutters>
              <NavigateNextIcon /> <ListItemText primary={language} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
