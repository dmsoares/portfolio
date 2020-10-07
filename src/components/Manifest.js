import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import manifest from '../assets/manifest.md'

export default function Main(props) {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(manifest)
      .then(res => res.text())
      .then(res => setText(res))
  })

  return (
    <React.Fragment>
      <Markdown>
        {text}
      </Markdown>
    </React.Fragment>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
}