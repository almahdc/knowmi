import React, {Component} from "react";

// Components
import Spinner from "../../components/UI/Spinner";
import Presentable from "../../components/UI/Presentable";

// Style
import {Button, Container, TextField} from "@material-ui/core";

// Store
import {authSignUp, authLogin} from "../../store/actions";
import {connect} from "react-redux";

// Assets
import PinkFlamingo from "../../assets/images/pink-flamingo.jpg";

// Router
import {Redirect} from "react-router-dom";

class Auth extends Component {
  state = {
    loginData: {
      email: {
        value: "",
        placeholder: "Your email",
        valid: false,
        isTouched: false,
        validationRules: {
          email: true,
          required: true
        }
      },
      password: {
        value: "",
        placeholder: "Password",
        valid: false,
        isTouched: false,
        validationRules: {
          required: true
        }
      }
    }
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.length > 0 && isValid;
    }
    if (rules.email && isValid) {
      isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    }
    return isValid;
  }

  onChangeInputHandler = event => {
    const updatedForm = {...this.state.loginData};
    const updatedElement = {...updatedForm[event.target.type]};
    updatedElement.value = event.target.value;
    updatedElement.isValid = this.checkValidity(
      event.target.value,
      updatedElement.validationRules
    );
    updatedElement.isTouched = true;
    updatedForm[event.target.type] = updatedElement;
    this.setState({
      loginData: updatedForm
    });
  };

  submitForm = () => {
    if (
      this.state.loginData.email.isValid &&
      this.state.loginData.password.isValid
    ) {
      this.props.onAuthLogin(
        this.state.loginData.email.value,
        this.state.loginData.password.value
      );
    }
  };

  render() {
    const userAuthenticated = this.props.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : null;
    const signUpForm = (
      <form validate>
        {userAuthenticated}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <TextField
              error={
                !this.state.loginData.email.isValid &&
                this.state.loginData.email.isTouched
              }
              required
              id="outlined-basic-input"
              type="email"
              label={this.state.loginData.email.placeholder}
              margin="normal"
              autoComplete="current-email"
              variant="outlined"
              fullWidth={true}
              onChange={this.onChangeInputHandler}
              value={this.state.loginData.email.value}
            />
            <TextField
              error={
                !this.state.loginData.password.isValid &&
                this.state.loginData.password.isTouched
              }
              required
              id="outlined-password-input"
              type="password"
              label={this.state.loginData.password.placeholder}
              margin="normal"
              autoComplete="current-password"
              variant="outlined"
              fullWidth={true}
              onChange={this.onChangeInputHandler}
              value={this.state.loginData.password.value}
            />
            <Button onClick={this.submitForm}>Login</Button>
            {this.props.error ? (
              <p style={{color: "red"}}>Login unsuccessful</p>
            ) : null}
          </>
        )}
      </form>
    );

    return (
      <Container maxWidth="lg" style={{height: "80vh"}}>
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
    error: state.authReducer.authError,
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
