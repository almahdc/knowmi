import * as actions from '../constants/actionTypes';

const logout = ({ dispatch, getState }) => next => action => {

  if (action.type !== actions.AUTH_LOGOUT) {
    return next(action)
  }

  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')

  next(action)

};

export default logout;
