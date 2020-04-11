import React from "react";

// Style
import {Box, Grid, Paper} from "@material-ui/core";
import classes from "./Presentable.module.scss";

const presentable = props => {
  return (
    <Box m={2} className={classes.Height}>
      <Paper variant="outlined" elevation={0} className={classes.Height}>
        <Grid container className={classes.Height}>
          <Grid item sm={6} className={classes.Item}>
            <img src={props.image} alt="Cover" className={classes.Image} />
          </Grid>
          <Grid item sm={6} className={classes.Item}>
            <Box m={4}>{props.children}</Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default presentable;
