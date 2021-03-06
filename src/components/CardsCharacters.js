import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardProperties } from './CardProperties';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '50px',
  },
  paper: {
    width: 400,
  },
}));

export const CardsCharacters = ({ players }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={6}>
          {players.map((value, i) => (
            <Grid key={value.name} item>
              <CardProperties className={classes.paper} player={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
