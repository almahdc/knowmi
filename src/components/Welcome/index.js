import React, {Component} from "react";

// Style
import {Typography, Box} from "@material-ui/core";
import classes from "./Welcome.module.scss";

// Assets
import patternImage from "../../assets/images/pattern.png";
import pattern2Image from "../../assets/images/pattern2.png";

const welcome = props => {
  return (
    <Box m={3}>
      <Typography variant="h4">Knowmi by Alma.</Typography>
      <Typography variant="h6" className={classes.WelcomeFocus}>
        Click away.
      </Typography>
      <img src={pattern2Image} alt="Pattern" className={classes.WelcomeImage} />
    </Box>
  );
};

export default welcome;
