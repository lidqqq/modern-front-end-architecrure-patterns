import { createAction, createReducer } from "redux-act";
import {
  itemsLoadAskStoriesSucceeded,
  itemsLoadTopStoriesSucceeded
} from "../domain/index.js";
import APP_STATES from "../../consts/appStates.js";

export const appLoadError = createAction("app/loadErr");
export const appLoadStart = createAction("app/loadStart");
export const appCtxLoaded = createAction("app/ctxLoaded");

export default createReducer(
  {
    [appLoadStart]: state => {
      return {
        ...state,
        currentStatus: APP_STATES.SUBMITTING
      };
    },
    [appLoadError]: state => {
      return {
        ...state,
        currentStatus: APP_STATES.INVALID
      };
    },
    [appCtxLoaded]: (state, payload) => {
      return {
        ...state,
        ctx: { ...payload }
      };
    },
    [itemsLoadAskStoriesSucceeded]: state => {
      return {
        ...state,
        currentStatus: APP_STATES.SUCCESS
      };
    },
    [itemsLoadTopStoriesSucceeded]: state => {
      return {
        ...state,
        currentStatus: APP_STATES.SUCCESS
      };
    }
  },
  {
    currentStatus: APP_STATES.PRISTINE,
    ctx: {
      props: { pageProps: {}, initialReduxState: {} },
      page: "",
      query: {},
      buildId: "",
      isFallback: false
    }
  }
);
