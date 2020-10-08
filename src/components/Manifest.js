import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ImageAvatar from './ImageAvatar'
import Markdown from './Markdown';
import manifest from '../assets/manifest.md';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const [text, setText] = useState('');
  const classes = useStyles();

  useEffect(() => {
    fetch(manifest)
      .then(res => res.text())
      .then(res => setText(res))
  })

  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <ImageAvatar />
        <Markdown className={classes.markdown}>
          {text}
        </Markdown>
      </Container>
    </React.Fragment>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}