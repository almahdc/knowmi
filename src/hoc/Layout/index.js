import React, {Component} from "react";

import * as constants from "../../constants/uiConstants";

// Components
import Menu from "../../components/Navigation/Menu";

// Style
import {Grid, Container} from "@material-ui/core";

// Redux
import {connect} from "react-redux";

class Layout extends Component {
  render() {
    const {type, topLeft, topRight, bottom} = this.props;
    return (
      <Container maxWidth="lg">
        <Grid container direction="column">
          <Grid item>
            <Menu isUserAuthenticated={this.props.isUserAuthenticated} />
          </Grid>
          <Grid item container spacing={2}>
            {type === constants.LAYOUT_LEFT_RIGHT_NEW_WINDOW_PAGE_BOTTOM ? (
              <>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={9}>
                  {topLeft}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {topRight}
                </Grid>
                <Grid item>{bottom}</Grid>
                <Grid item xs={0} sm={2} />
              </>
            ) : (
              this.props.children
            )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserAuthenticated: state.authReducer.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
