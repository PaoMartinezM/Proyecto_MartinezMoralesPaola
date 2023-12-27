import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { green } from '@mui/material/colors';

export default function InteractiveList() {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
      }}
    >
      <Grid item xs={12} md={6}>
        <List >
          
            <ListItem>
              <ListItemIcon >
                <CheckBoxIcon sx={{ color: green[500] }} />
              </ListItemIcon>
              <ListItemText
                primary="Innovación Tecnológica"
                
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <CheckBoxIcon sx={{ color: green[500] }} />
              </ListItemIcon>
              <ListItemText
                primary="Pensamiento Analítico"
                
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <CheckBoxIcon sx={{ color: green[500] }} />
              </ListItemIcon>
              <ListItemText
                primary=" Resiliencia"
                
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
              <CheckBoxIcon sx={{ color: green[500] }} />
              </ListItemIcon>
              <ListItemText
                primary=" Gestión del Tiempo"
                
              />
            </ListItem>
           
        </List>
      </Grid>
    </Box>
  );
}
