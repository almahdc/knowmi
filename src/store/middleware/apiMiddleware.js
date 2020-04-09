import axios from "axios";
import * as actions from "../constants/actionTypes";

const api = ({dispatch, getState}) => next => action => {
  if (action.type !== actions.API_GET) {
    return next(action);
  }

  const {url, success} = action.payload;
  axios
    .get(url)
    .then(response => {
      dispatch(success);
    })
    .catch(error => {
      console.log("error", error);
    });
};

export default api;
