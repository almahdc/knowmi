import React, {Component} from "react";

// Components
import CardDescription from "../../components/UI/CardDescription";
import SkillsList from "../../components/UI/SkillsList";
import ProjectsPresenter from "../../components/ProjectsPresenter";
import ContactMe from "../../components/UI/ContactMe";
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
        <Box m={2}>
          <Grid container>
            <Grid item md={9} className={classes.FullWindowHeight}>
              <Welcome />
            </Grid>

            <Grid item md={3}>
              <SkillsList
                skills={[
                  "REACT",
                  "GRAPHQL",
                  "GO",
                  "CSS/SCSS",
                  "JAVASCRIPT",
                  "OBJECTIVE-C",
                  "SWIFT",
                  "JAVA"
                ]}
                header="My skills"
              />
              <div style={{height: "30px"}}></div>
              <ContactMe header="Where to find me?" />
            </Grid>

            <Grid item className={classes.FullWindowHeight} id="myprojects">
              <ProjectsPresenter
                projectsInfo={[
                  {title: "Simple TODO list"},
                  {title: "Project 2"},
                  {title: "Project 3"}
                ]}
                header="My projects"
              />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default Home;
