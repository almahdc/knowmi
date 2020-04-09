import React from "react";

// Style
import {Box, Grid, Paper} from "@material-ui/core";

const presentable = props => {
  return (
    <Box m={2}>
      <Paper variant="outlined" elevation={0}>
        <Grid container>
          <Grid item sm={6} style={{overflow: "hidden"}}>
            <img src={props.image} alt="Cover" />
          </Grid>
          <Grid item sm={6}>
            <Box m={4}>{props.children}</Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default presentable;
