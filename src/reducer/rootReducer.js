import changeTheNumber from "./incDecReducer";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
   changeNum:changeTheNumber
});

export default rootReducer;