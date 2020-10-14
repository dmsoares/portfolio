import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    name: 'Significa Frontend Challenge',
    image: 'https://raw.githubusercontent.com/dmsoares/projects/master/significa-challenge/thumbnail.jpg',
    content: 'A netflix-esque front page made with React.',
    url: 'https://significa-frontend-challenge.herokuapp.com/',
    sourceCode: 'https://github.com/dmsoares/projects/tree/master/significa-challenge'
  },
  {
    id: 2,
    name: 'Pomodoro Clock',
    image: 'https://raw.githubusercontent.com/dmsoares/projects/master/pomodoro/thumbnail.jpg',
    content: 'A Pomodoro Clock that allows to change session and break times. Made with React-Redux.',
    url: 'https://red-pomodoro-clock-fcc.herokuapp.com/',
    sourceCode: 'https://github.com/dmsoares/projects/tree/master/pomodoro'
  },
  {
    id: 3,
    name: 'Calculator',
    image: 'https://raw.githubusercontent.com/dmsoares/projects/master/calculator/thumbnail.png',
    content: 'A minimalist calculator made with React for freeCodeCamp\'s JavaScript Calculator Challenge.',
    url: 'https://min-calculator-fcc.herokuapp.com/',
    sourceCode: 'https://github.com/dmsoares/projects/tree/master/calculator'
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map(project => {
          return (
            <Grid item xs={12} sm={6}>
              <ProjectCard
                key={project.id}
                title={project.name}
                image={project.image}
                content={project.content}
                url={project.url}
                sourceCode={project.sourceCode}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

/*

Of course, all this time and energy wouldn't make sense without getting my hands dirty coding. Please check my [Github profile](https://www.github.com/dmsoares). Go to the Projects repo to see how I handled freeCodeCamp's project challenges or how I responded to Significa's call to code a Netflix-esque front page with React!
Visit the [fullstackopen-exercises](https://github.com/dmsoares/fullstack-open-exercises) repository and you can also see how I am currently doing on [Fullstack Open curriculum](https://fullstackopen.com/en).

My journey thus far has allowed me to learn different skills such as:
  Responsive Design
  HTML
  CSS
  Javascript ES6
  React
  MongoDb

*/