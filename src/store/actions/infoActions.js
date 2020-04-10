import * as actionTypes from "../constants/actionTypes";

// only auth actions without the logic

export const dataFetchStart = loading => {
  return {
    type: actionTypes.DATA_FETCH_START,
    payload: {
      loading: loading
    }
  };
};

export const dataFetchSuccess = (loading, responseData) => {
  return {
    type: actionTypes.DATA_FETCH_SUCCESS,
    payload: {
      loading: loading,
      retrivedData: responseData
    }
  };
};

export const dataFetchFail = (loading, error) => {
  return {
    type: actionTypes.DATA_FETCH_FAIL,
    payload: {
      error: error,
      loading: loading
    }
  };
};

export const projectsFetch = () => {
  return {
    type: actionTypes.DATA_FETCH,
    payload: {
      url: "https://knowmi-940da.firebaseio.com/myProjectsList.json",
      success: dataFetchSuccess,
      fail: dataFetchFail
    }
  };
};
