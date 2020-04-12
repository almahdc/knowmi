import React from "react";

// Style
import {Grid, Box} from "@material-ui/core";

const simpleTitleContent = props => {
  return (
    <Box m={3}>
      <h4>{props.header}</h4>
      <Grid container justify={props.allign} spacing={2}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default simpleTitleContent;
