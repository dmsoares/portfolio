import { Typography } from '@material-ui/core';
import React from 'react';
import Avatar from './ImageAvatar';

const style = {
  section: {
    display: 'flex',
    marginBottom: '2rem'
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '1rem',
  },
  h1: {
    fontSize: '1.875rem',
  },
  p: {
    lineHeight: 1,
  },
}

export default function Header() {
  return (
    <section style={style.section}>
      <Avatar/>
      <div style={style.headerContent}>
        <Typography variant='h2' component='h1' style={style.h1}>I'm Décio</Typography>
        <Typography variant='body2' style={style.p}>Programmer, Anthropologist</Typography>
      </div>
    </section>
  )
}