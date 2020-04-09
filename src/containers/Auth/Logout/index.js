import React, {Component} from "react";

// Router
import {Redirect} from "react-router-dom";

// Redux
import {connect} from "react-redux";
import {logout} from "../../../store/actions";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
