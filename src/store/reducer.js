import { combineReducers } from "redux";
import domainReducer from "./ducks/domain/index.js";
import UIReducer from "./ducks/ui/index.js";
import appReducer from "./ducks/app/index.js";

const rootReducer = combineReducers({
  app: appReducer,
  ui: UIReducer,
  domain: domainReducer
});

export default rootReducer;
