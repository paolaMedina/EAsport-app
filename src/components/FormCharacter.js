import React from 'react';
import { TextField } from '@material-ui/core';

export const FormCharacter = ({ team, handleInputChange }) => {
  return <TextField id="standard-basic" label="Equipo" onChange={handleInputChange} value={team} name="team" />;
};
