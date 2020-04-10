import * as actions from "../constants/actionTypes";
import {authStart, authSuccess, authFail, logout} from "../actions";

import axios from "axios";

const auth = ({dispatch, getState}) => next => action => {
  if (
    action.type !== actions.AUTH_SIGNUP &&
    action.type !== actions.AUTH_LOGIN
  ) {
    return next(action);
  }

  // starting the request
  dispatch(authStart());

  const authData = {...action.payload, returnSecureToken: true};

  // TODO !!!
  const API_KEY = "AIzaSyCGpYGX5PpK216QRxEl9IWOUXNeFkD1C7g";
  let url = "";

  if (action.type === actions.AUTH_LOGIN) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY;
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      API_KEY;
  }

  axios
    .post(url, authData)
    .then(response => {
      const expiresInSeconds = response.data.expiresIn * 1000;

      localStorage.setItem("token", response.data.idToken);
      const expirationDate = new Date(new Date().getTime() + expiresInSeconds);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(trackTokenTimeout(expiresInSeconds));
    })
    .catch(error => {
      dispatch(authFail(error));
    });
};

const trackTokenTimeout = timeout => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, timeout);
  };
};

export const checkAuthState = ({dispatch, getState}) => next => action => {
  if (action.type !== actions.AUTH_CHECK_STATE) {
    return next(action);
  }

  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate > new Date()) {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
      dispatch(
        trackTokenTimeout(expirationDate.getTime() - new Date().getTime())
      );
    } else {
      dispatch(logout());
    }
  }
};

export default auth;
