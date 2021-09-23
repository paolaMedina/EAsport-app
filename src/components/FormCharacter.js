import React from 'react';
import { TextField } from '@material-ui/core';

export const FormCharacter = ({ team, handleInputChange }) => {
  return (
    <div>
      <TextField id="team" label="Equipo" onChange={handleInputChange} value={team} name="team" />
    </div>
  );
};
