import React, {Component} from "react";

// Components
import SkillsList from "../UI/SkillsList";
import ContactMe from "../UI/ContactMe";
import ClearSeparator from "../UI/Separator";

// Style
import {Grid} from "@material-ui/core";

// Data
import {aboutMeSkills, aboutMeHeader} from "./aboutMeData";

const aboutMe = props => {
  return (
    <Grid container>
      <Grid item sm={9} md={12}>
        <SkillsList skills={aboutMeSkills} header={aboutMeHeader} />
      </Grid>
      <Grid item sm={3} md={12}>
        <ContactMe header="Where to find me?" />
      </Grid>
    </Grid>
  );
};

export default aboutMe;
