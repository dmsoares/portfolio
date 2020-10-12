import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';
import manifest from '../assets/manifest.md';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
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
        <Typography variant='body1' gutterBottom>Welcome to my portfolio! My name is Decio.</Typography>
        <Typography variant='body1' gutterBottom><strong>I'm a web developer in search for an internship or junior position.</strong></Typography>
        <Typography variant='body1' gutterBottom>I've created this website to showcase my skills and to write about this incredible journey. I'll be populating the Projects tab with my creations and you can get to know me better below!</Typography>
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