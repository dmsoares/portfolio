import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Markdown from "./Markdown";
import manifest from "../assets/manifest.md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  const [text, setText] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetch(manifest)
      .then((res) => res.text())
      .then((res) => setText(res));
  });

  return (
    <React.Fragment>
      <section>
        <Markdown className={classes.markdown}>{text}</Markdown>
      </section>
    </React.Fragment>
  );
}

Journey.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

export default Journey;
