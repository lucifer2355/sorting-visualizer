import * as TYPES from "./types";

export const createArray = (arr) => async (dispatch) => {
  dispatch({
    type: TYPES.CREATE_ARRAY,
    array: arr,
  });
};
