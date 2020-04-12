import React from "react";

// Style
import {Paper} from "@material-ui/core";
import classes from "./Skill.module.scss";

const skill = props => {
  return (
    <Paper className={classes.SmallContainer} elevation={0} variant="outlined">
      {props.skillName}
    </Paper>
  );
};

export default skill;
