import React, {Component} from "react";

// Style
import {Grid, Box} from "@material-ui/core";

// TODO: Better UI, shortSummary prop, route path

const simpleTitleContent = props => {
  return (
    <Box m={2}>
      <h4>{props.header}</h4>
      <Grid container justify={props.allign} spacing={2}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default simpleTitleContent;
