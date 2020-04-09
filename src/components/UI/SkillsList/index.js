import React from "react";

// Style

import SimpleTitleContent from "../../SimpleTitleContent";

// Components
import Skill from "./Skill";

const skillsList = props => {
  return (
    <SimpleTitleContent header={props.header} align="left">
      {props.skills.map(skill => (
        <Skill key={skill} skillName={skill} />
      ))}
    </SimpleTitleContent>
  );
};

export default skillsList;
