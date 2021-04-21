import React from "react";
import ScrollableTabs from "./ScrollableTabs";
import Projects from "./Projects";
import Journey from "./Journey";

const pages = [
  {
    id: 2,
    name: "Projects",
    component: <Projects />,
  },
  {
    id: 1,
    name: "Journey",
    component: <Journey />,
  },
];

export default function Main() {
  return (
    <React.Fragment>
      <ScrollableTabs tabs={pages} />
    </React.Fragment>
  );
}

