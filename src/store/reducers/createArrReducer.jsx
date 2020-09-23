import * as TYPES from "../actions/types";

const initialState = {
  array: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ARRAY:
      return {
        ...state,
        array: action.array,
      };

    default:
      return state;
  }
};
