import * as TYPES from "../actions/types";

const initialState = {
  array: [],
  index: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ARRAY:
      return {
        ...state,
        array: action.array,
      };

    case TYPES.SET_INDEX:
      return {
        ...state,
        index: action.index,
      };

    default:
      return state;
  }
};
