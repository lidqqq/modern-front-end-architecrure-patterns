import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import DIContainer from "../di-container/client.js";
import rootReducer from "./reducer.js";
import APP_STATES from "./consts/appStates.js";

const initialState = {
  app: {
    currentStatus: APP_STATES.PRISTINE,
    ctx: {
      props: { pageProps: {}, initialReduxState: {} },
      page: "",
      query: {},
      buildId: "",
      isFallback: false
    }
  },
  ui: {},
  domain: {
    items: {
      byId: {},
      allIds: [],
      topIds: [],
      askIds: []
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
