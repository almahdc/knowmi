import React, {Component} from "react";

import * as constants from "../../utility/UIconst";

// Components
import Menu from "../../components/Navigation/Menu";

// Style
import {Box, Grid} from "@material-ui/core";

// Redux
import {connect} from "react-redux";

class Layout extends Component {
  render() {
    const {type, topLeft, topRight, bottom} = this.props;
    return (
      <>
        <Menu isUserAuthenticated={this.props.isUserAuthenticated} />
        {type === constants.LAYOUT_LEFT_RIGHT_BOTTOM ? (
          <Grid container>
            <Grid item>{topLeft}</Grid>
            <Grid item>{topRight}</Grid>
            <Grid item>{bottom}</Grid>
          </Grid>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserAuthenticated: state.authReducer.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
