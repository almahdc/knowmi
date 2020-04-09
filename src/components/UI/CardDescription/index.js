import React from "react";

// Style
import {
  CardContent,
  CardActions,
  Typography,
  Button,
  Paper
} from "@material-ui/core";

const cardDescription = props => {
  return (
    <Paper variant="outlined" elevation={0}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.interestHeader}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Paper>
  );
};

export default cardDescription;
