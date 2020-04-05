import React, { Component } from 'react'

// Components
import Spinner from '../../components/UI/Spinner'

// Style
import { Button, Container, TextField } from '@material-ui/core';

// Store
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

class Auth extends Component {

  state = {
    email: "",
    password: ""
  }

  onChangeEmailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onChangePasswordHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return(
      <Container maxWidth="xs">
        <form>
        {this.props.loading ? <Spinner/> :
          ( <>
              <TextField id="filled-basic" type="email" placeholder="Your email" margin="normal" variant="filled" fullWidth="true" onChange={this.onChangeEmailHandler} value={this.state.email}/>
              <TextField id="filled-basic" placeholder="Your password" margin="normal" variant="filled" fullWidth="true" onChange={this.onChangePasswordHandler} value={this.state.password}/>
              <Button onClick={() => this.props.onAuth(this.state.email, this.state.password)}>Sing in</Button>
            </>
          )
        }
        </form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
