import React, {Component} from "react";

// Components
import CardDescription from "../../components/UI/CardDescription";

import ProjectsPresenter from "../../components/ProjectsPresenter";
import AboutMe from "../../components/AboutMe";
import Welcome from "../../components/Welcome";

// Style
import {Typography, Box, Grid} from "@material-ui/core";
import classes from "./Home.module.scss";

// Assets
import patternImage from "../../assets/images/pattern.png";
import pattern2Image from "../../assets/images/pattern2.png";

// TODO: image

// Router
import {NavLink} from "react-router-dom";
// Style
import {Button} from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <>
        <Grid item container className={classes.FullWindowHeight}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10} md={8}>
            <Welcome />
          </Grid>
          <Grid item spacing={0} xs={12} md={2}>
            <AboutMe />
          </Grid>
          <Grid item xs={0} md={1} />
        </Grid>
        <Grid item xs={0} md={1} />
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
        <Grid item xs={0} md={1} />
      </>
    );
  }
}

export default Home;
