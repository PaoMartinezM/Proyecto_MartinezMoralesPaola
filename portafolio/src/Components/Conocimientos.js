import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Grid from '@mui/material/Grid';

const programmingLanguages = [
  'C',
  'C++',
  'Python',
  'Swift',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Postman'
];

export default function GutterList() {
  const leftColumn = programmingLanguages.slice(0, 5);
  const rightColumn = programmingLanguages.slice(5);

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      <Grid item xs={6}>
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {leftColumn.map((language, index) => (
            <ListItem key={index} disableGutters>
             <NavigateNextIcon/> <ListItemText primary={language} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {rightColumn.map((language, index) => (
            <ListItem key={index} disableGutters>
             <NavigateNextIcon/> <ListItemText primary={language} />
            </ListItem>
          ))}
        </List>
        
      </Grid>
    </Grid>
  );
}
