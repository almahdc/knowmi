import * as actionTypes from "../constants/actionTypes"

// only auth actions without the logic

export const setData = () => {
  return {
    type: actionTypes.SET_DATA
  }
}

export const getData = () => {
  return {
    type: actionTypes.API_GET,
    payload: {
      url: "https://knowmi-940da.firebaseio.com/testData.json",
      success: setData
    }
  }
}
