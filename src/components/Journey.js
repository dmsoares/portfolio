import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';
import manifest from '../assets/manifest.md';
import Header from './Header';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2, 2),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

function Journey() {
  const [text, setText] = useState('');
  const classes = useStyles();

  useEffect(() => {
    fetch(manifest)
      .then(res => res.text())
      .then(res => setText(res))
  })

  return (
    <React.Fragment>
      <Header/>
      <section className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant='h5' component={'h1'} gutterBottom>Welcome to my portfolio!</Typography>
          <Typography variant='body1' gutterBottom><strong>I'm a web developer in search for an internship or junior position.</strong></Typography>
          <Typography variant='body1' gutterBottom>I created this website to showcase my skills and to write about this incredible journey. It's meant to be a work in progress and I'll be refining it and populating the Projects tab with my creations.</Typography>
        </Paper>
      </section>
      <section>
        <Markdown className={classes.markdown}>
          {text}
        </Markdown>
      </section>
    </React.Fragment>
  )
}

Journey.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}

export default Journey;