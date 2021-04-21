import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import { Box, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import projects from "../projectsDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2, 2),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <Box mb={4}>
        <Header id="header" />
        <section className={classes.root}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component={"h1"} gutterBottom>
              Welcome to my portfolio!
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>I am currently searching for a junior position.</strong>
            </Typography>
            <Typography variant="body2" gutterBottom>
              June 25th 2018, aka “The day I first said &#60;h1&#62;Hello
              World!&#60;/h1&#62; and decided Software Development would be my
              passionate way of making an impact in this tiny blue dot at the
              corner of the Universe”!
              <br></br> An eager explorer of cultures with a keen eye for
              diversity matters, I've come to realize how much clean, safe &&
              inclusive technology can contribute to the well-being of all
              around us, regardless of who they are or where they come from.
              <br></br>
              Thus my goal: to expand inclusion through tech. One jazzy,
              beautifully clean line of code at a time!<br></br>
              Do you have an inspiring proposition? Just give me a shout-out!
            </Typography>
          </Paper>
        </section>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {projects.map((project) => {
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
            );
          })}
        </Grid>
      </div>
    </>
  );
}
