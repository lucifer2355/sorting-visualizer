import * as TYPES from "../actions/types";

const initialState = {
  array: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ARRAY:
      return { array: action.array };

    default:
      return state;
  }
};
