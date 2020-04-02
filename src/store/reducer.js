import { combineReducers } from "redux";
import domainReducer from "./ducks/domain/index.js";
import UIStatesReducer from "./ducks/ui/index.js";
import appStatesReducer from "./ducks/app/index.js";

const rootReducer = combineReducers({
  appStates: appStatesReducer,
  UIStates: UIStatesReducer,
  domain: domainReducer
});

export default rootReducer;
