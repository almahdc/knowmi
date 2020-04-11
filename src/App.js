import React, {Component} from "react";

// HOC
import Layout from "./hoc/Layout";

// Router
import {Route, Switch, withRouter, Redirect} from "react-router-dom";

// Containers
import Home from "./containers/Home";

// Style
import {ThemeProvider} from "@material-ui/core/styles";
import themeGlobal from "./style/themeCustomization";

// Redux
import {connect} from "react-redux";
import {checkAuthState} from "./store/actions";

// Containers - Lazy loading
import asyncComponent from "./hoc/asyncComponent";
const asyncAuth = asyncComponent(() => import("./containers/Auth"));
const asyncLogout = asyncComponent(() => import("./containers/Auth/Logout"));

// The component
class App extends Component {
  componentDidMount() {
    this.props.tryAutologin();
  }

  render() {
    return (
      <ThemeProvider theme={themeGlobal}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            {this.props.isUserAuthenticated && (
              <Route path="/logout" component={asyncLogout} />
            )}
            {!this.props.isUserAuthenticated && (
              <Route path="/auth" component={asyncAuth} />
            )}
            <Redirect to="/" />
          </Switch>
        </Layout>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutologin: () => dispatch(checkAuthState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
