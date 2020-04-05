import * as actions from '../constants/actionTypes';
import { authStart, authSuccess, authFail } from '../actions';

import axios from 'axios';

const auth = ({ dispatch, getState }) => next => action => {

  if (action.type !== actions.AUTH) {
    return next(action);
  }

  // starting the request
  dispatch(authStart());

  const authData = {...action.payload, returnSecureToken: true}
  console.log("authData", authData);
  axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGpYGX5PpK216QRxEl9IWOUXNeFkD1C7g", authData)
  .then(response => {
    // success
    dispatch(authSuccess(response.data.idToken, response.data.localId));
  })
  .catch(error => {
    // fail
    dispatch(authFail(error))
  })
};

export default auth;
