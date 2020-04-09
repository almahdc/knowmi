import * as actionTypes from "../constants/actionTypes"

// only auth actions without the logic
// login is in the middleware -> authMiddleware.js

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const authFail = (authError) => {
  return {
    type: actionTypes.AUTH_FAILED,
    authError: authError
  }
}

export const authSignUp = (email, password) => {
  return {
    type: actionTypes.AUTH_SIGNUP,
    payload: { email, password }
  }
}

export const authLogin = (email, password) => {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload: { email, password }
  }
}

export const checkAuthState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE
  }
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}
