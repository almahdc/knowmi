import React, {Component} from "react";

// Components
import Spinner from "../../components/UI/Spinner";
import Presentable from "../../components/UI/Presentable";

// Style
import {Button, Container, TextField, Grid} from "@material-ui/core";

// Store
import {authSignUp, authLogin} from "../../store/actions";
import {connect} from "react-redux";

// Assets
import PinkFlamingo from "../../assets/images/pink-flamingo.jpg";

// Router
import {Redirect} from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeEmailHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  onChangePasswordHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    const userAuthenticated = this.props.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : null;

    const signUpForm = (
      <form>
        {userAuthenticated}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <TextField
              id="outlined-basic"
              type="email"
              placeholder="Your email"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              onChange={this.onChangeEmailHandler}
              value={this.state.email}
            />
            <TextField
              id="outlined-basic"
              placeholder="Your password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              type="password"
              onChange={this.onChangePasswordHandler}
              value={this.state.password}
            />
            <Grid container justify="space-between">
              <Button
                onClick={() =>
                  this.props.onAuthSignUp(this.state.email, this.state.password)
                }
              >
                Sing up
              </Button>
              <Button
                onClick={() =>
                  this.props.onAuthLogin(this.state.email, this.state.password)
                }
              >
                Log in instead?
              </Button>
            </Grid>
          </>
        )}
      </form>
    );

    return (
      <Container maxWidth="lg">
        <Presentable image={PinkFlamingo}>{signUpForm}</Presentable>
      </Container>
    );
  }
}

// TODO: add the reference
//Image by <a href="https://pixabay.com/users/JimboChan-1645900/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1484781">JimboChan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1484781">Pixabay</a>
const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.errorAuth,
    isUserAuthenticated: state.authReducer.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuthSignUp: (email, password) => dispatch(authSignUp(email, password)),
    onAuthLogin: (email, password) => dispatch(authLogin(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
