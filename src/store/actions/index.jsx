import * as TYPES from "./types";

export const createArray = (arr) => async (dispatch) => {
  // console.log(arr)
  dispatch({
    type: TYPES.CREATE_ARRAY,
    array: arr,
  });
};
