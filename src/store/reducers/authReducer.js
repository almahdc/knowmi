import * as actions from "../constants/actionTypes";

// Utility
import {updateObject} from "../../utility/updateObject";

const initialState = {
  token: null,
  userId: null,
  authError: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return updateObject(state, {loading: true});
    case actions.AUTH_FAILED:
      return updateObject(state, {authError: action.authError, loading: false});
    case actions.AUTH_SUCCESS:
      return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        authError: null,
        loading: false
      });
    case actions.AUTH_LOGOUT:
      return updateObject(state, {token: null, userId: null, loading: false});
    default:
      break;
  }
  return state;
};

export default authReducer;
