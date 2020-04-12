import React, {Component} from "react";

// Components

import ProjectsPresenter from "../../components/ProjectsPresenter";
import AboutMe from "../../components/AboutMe";
import Welcome from "../../components/Welcome";

// Style
import {Grid} from "@material-ui/core";
import classes from "./Home.module.scss";

class Home extends Component {
  render() {
    return (
      <>
        <Grid item container className={classes.FullWindowHeight}>
          <Grid item sm={1} />
          <Grid item xs={12} sm={10} md={8}>
            <Welcome />
          </Grid>
          <Grid item container spacing={0} xs={12} md={2}>
            <AboutMe />
          </Grid>
          <Grid item md={1} />
        </Grid>
        <Grid item md={1} />
        <Grid
          item
          className={classes.FullWindowHeight}
          id="myprojects"
          xs={12}
          md={10}
        >
          <ProjectsPresenter
            projectsInfo={[
              {title: "Simple TODO list"},
              {title: "Project 2"},
              {title: "Project 3"}
            ]}
            header="My projects"
          />
        </Grid>
        <Grid item md={1} />
      </>
    );
  }
}

export default Home;
