import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a style={{ textDecoration: 'none', color: 'inherit' }} target='_blank' rel='noopener noreferrer' href={props.url || props.sourceCode}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
      <CardActions>
        {props.url && <Button size="small" color="primary">
          <a target='_blank' rel='noopener noreferrer' href={props.url}>Visit</a>
        </Button>}
        {props.sourceCode && <Button size="small" color="primary">
          <a target='_blank' rel='noopener noreferrer' href={props.sourceCode}>Source</a>
        </Button>}
      </CardActions>
    </Card>
  );
}
