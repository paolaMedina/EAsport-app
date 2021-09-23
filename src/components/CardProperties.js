import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  media: {
    height: 140,
    paddingTop: '90%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const CardProperties = ({ player }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader title={player.name} />
      <CardMedia
        className={classes.media}
        image="https://cdn-icons-png.flaticon.com/512/164/164441.png"
        title={`Photography ${player.name}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Posición: {player.position}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Name : {player.name}</Typography>
          <Typography paragraph>Position : {player.position}</Typography>
          <Typography paragraph>Nation : {player.nation}</Typography>
          <Typography paragraph>{player.team && `Team:${player.team}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
