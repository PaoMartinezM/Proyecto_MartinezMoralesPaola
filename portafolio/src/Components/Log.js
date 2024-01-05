import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === '316277637' && password === 'password0') {
      navigate('/admin');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <TextField
          id="username"
          label="Usuario"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            width: '200px', 
            backgroundColor: '#D4398A',
            color: '#0B032D',
            borderRadius: '30px',
            padding: '12px',
            fontSize: '14px', 
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
                backgroundColor: '#843B62',
                color: '#F8F7F5',
              },
            }}
          >
          Iniciar Sesión
        </Button>
      </Grid>
    </Grid>
  );
};

export default Log;
