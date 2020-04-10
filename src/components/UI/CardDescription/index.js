import React from "react";

import {Link} from "react-router-dom";
// Style
import {
  CardContent,
  CardActions,
  Typography,
  Button,
  Paper
} from "@material-ui/core";
import classes from "./CardDescription.module.scss";

const cardDescription = props => {
  return (
    <Paper variant="outlined" elevation={0} className={classes.CardDescription}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.projectInfo.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {props.projectInfo.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.projectInfo.continueRelativeLink} size="small">
          {props.projectInfo.continueText}
        </Link>
      </CardActions>
    </Paper>
  );
};

export default cardDescription;
