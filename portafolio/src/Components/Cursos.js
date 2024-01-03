import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';

const data = [
  {
    title: 'Curso de Introducción a Wordpress',
    date: '28/01/2022',
    organization: 'FES Aragón UNAM',
   
  },
  {
    title: 'Certificado de estudios de Asistente Web',
    date: '19/05/2022',
    organization: 'Fundación Carlos Slim',
  },
  {
    title: 'Certificado de estudios de Desarrollador de Contenido Digital',
    date: '19/05/2022',
    organization: 'Fundación Carlos Slim',
  },
];

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={`${item.date}\n${item.organization}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
