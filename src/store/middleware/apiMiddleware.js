import axios from "axios";
import * as actions from "../constants/actionTypes";
import {dataFetchStart} from "../actions";

const api = ({dispatch, getState}) => next => action => {
  if (action.type !== actions.DATA_FETCH) {
    return next(action);
  }

  dispatch(dataFetchStart());

  const {url, success, fail} = action.payload;
  axios
    .get(url)
    .then(response => {
      dispatch(success(false, response.data));
    })
    .catch(error => {
      dispatch(fail(false, error));
    });
};

export default api;
