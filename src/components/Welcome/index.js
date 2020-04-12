import React from "react";

// Style
import {Typography, Grid} from "@material-ui/core";
import classes from "./Welcome.module.scss";

// Assets
//import patternImage from "../../assets/images/pattern.png";
import pattern2Image from "../../assets/images/pattern2.png";

const welcome = props => {
  return (
    <Grid item className={classes.Padding}>
      <Typography variant="h4">Knowmi by Alma.</Typography>
      <Typography variant="h6" className={classes.WelcomeFocus}>
        Click away.
      </Typography>
      <img src={pattern2Image} alt="Pattern" className={classes.WelcomeImage} />
    </Grid>
  );
};

export default welcome;
