import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { CardsCharacters } from './components/CardsCharacters';
import { FormCharacter } from './components/FormCharacter';

import { useForm } from './hooks/useForm';
import { useAxios } from './hooks/useAxios';

function App() {
  const [{ team }, handleInputChange] = useForm({ team: '' });
  const { data, loading, error } = useAxios('GET', 'players');
  // const { data_filter, loading, error } = useAxios('POST', 'team', {
  //   name: team,
  //   page: 2,
  // });

  return (
    <div className="App">
      {loading && (
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <FormCharacter team={team} handleInputChange={handleInputChange} />
      <br />
      {data && <CardsCharacters players={data.players} />}
      {error && <Alert severity="error">Error al consultar Api</Alert>}
    </div>
  );
}

export default App;
