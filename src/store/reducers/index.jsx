import { combineReducers } from "redux";
import createArrayReducer from "./createArrReducer";

export default combineReducers({
  array: createArrayReducer,
});
