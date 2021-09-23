import React from 'react';
import { CircularProgress, TablePagination, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { CardsCharacters } from './components/CardsCharacters';
import { FormCharacter } from './components/FormCharacter';

import { useForm } from './hooks/useForm';
import { useAxios } from './hooks/useAxios';

function App() {
  const [{ team }, handleInputChange] = useForm({ team: '' });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data: data_player, loading, error } = useAxios('GET', `players?page=${page + 1}&per_page=${rowsPerPage}`);

  const { data: data_filter } = useAxios('POST', `team?name=${team}&page=${page + 1}`, {
    name: team,
    page: page + 1,
    per_page: rowsPerPage,
  });

  const data = data_filter ? data_filter : data_player;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="App">
      <FormCharacter team={team} handleInputChange={handleInputChange} />

      <br />
      {loading && (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {data && <CardsCharacters players={data.players} />}
      {data && (
        <TablePagination
          component="div"
          count={data.totalItems}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
      {error && <Alert severity="error">Error al consultar Api</Alert>}
    </div>
  );
}

export default App;
