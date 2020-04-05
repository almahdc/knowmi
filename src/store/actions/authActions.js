import * as actionTypes from "../constants/actionTypes"


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

export const auth = (email, password) => {
  return {
    type: actionTypes.AUTH,
    payload: { email, password }
  }
}
