import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import DIContainer from '../di-container/client.js';
import rootReducer from './reducer.js';
import APP_STATES from './consts/appStates.js';

const initialState = {
  appStates: {
    currentStatus: APP_STATES.PRISTINE
  },
  UIStates: {},
  domain: {
    items: {
      byId: {},
      allIds: []
    }
  }
};

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ container: DIContainer }))
    )
  );
};
