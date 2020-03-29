import { combineReducers } from 'redux';
import domainReducer from './ducks/domain/index.js';
import UIStatesReducer from './ducks/uiStates/index.js';
import appStatesReducer from './ducks/appStates/index.js';

const rootReducer = combineReducers({
  appStates: appStatesReducer,
  UIStates: UIStatesReducer,
  domain: domainReducer
});

export default rootReducer;
