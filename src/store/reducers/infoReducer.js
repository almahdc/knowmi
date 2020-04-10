import * as actions from "../constants/actionTypes";

// Utility
import {updateObject} from "../../utility/updateObject";

const initialState = {
  loading: false,
  retrivedData: [],
  error: null
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DATA_FETCH_START:
      return updateObject(state, {loading: true});
    case actions.DATA_FETCH_SUCCESS:
      return updateObject(state, {
        loading: false,
        retrivedData: action.payload.retrivedData
      });
    case actions.DATA_FETCH_FAIL:
      return updateObject(state, {loading: false, error: action.error});
    default:
      break;
  }
  return state;
};

export default infoReducer;
