import React, {Component} from "react";

// Components
import SkillsList from "../UI/SkillsList";
import ContactMe from "../UI/ContactMe";
import ClearSeparator from "../UI/Separator";

// Data
import {aboutMeSkills, aboutMeHeader} from "./aboutMeData";

const aboutMe = props => {
  return (
    <>
      <SkillsList skills={aboutMeSkills} header={aboutMeHeader} />
      <ClearSeparator height="30px" />
      <ContactMe header="Where to find me?" />
    </>
  );
};

export default aboutMe;
