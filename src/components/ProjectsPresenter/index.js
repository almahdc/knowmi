import React, {Component} from "react";

// Style
import {Grid} from "@material-ui/core";

// Components
import CardDescription from "../UI/CardDescription";
import SimpleTitleContent from "../SimpleTitleContent";

// TODO: Better UI, shortSummary prop, route path

const projectsPresenter = props => {
  return (
    <SimpleTitleContent header={props.header}>
      {props.projectsInfo.map(projectInfo => (
        <Grid item key={projectInfo.title}>
          <CardDescription interestHeader={projectInfo.title} />
        </Grid>
      ))}
    </SimpleTitleContent>
  );
};

export default projectsPresenter;
