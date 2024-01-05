import React from 'react';
import TextField from '@mui/material/TextField';

const FormContacto = () => {
  return (
    <div>
      <TextField
        id="nombre"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="correo"
        label="Correo Electrónico"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="telefono"
        label="Teléfono"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="motivo"
        label="Motivo de Interés"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
    </div>
  );
};

export default FormContacto;
