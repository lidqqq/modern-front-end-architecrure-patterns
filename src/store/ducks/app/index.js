import { createAction, createReducer } from "redux-act";
import {
  itemsLoadByIdSucceeded,
  itemsLoadTopStoriesSucceeded
} from "../domain/index.js";
import APP_STATES from "../../consts/appStates.js";

export const appLoadError = createAction("app/loadErr");
export const appLoadStart = createAction("app/loadStart");

export default createReducer(
  {
    [appLoadStart]: () => {
      return {
        currentStatus: APP_STATES.SUBMITTING
      };
    },
    [appLoadError]: () => {
      return {
        currentStatus: APP_STATES.INVALID
      };
    },
    [itemsLoadByIdSucceeded]: () => {
      return {
        currentStatus: APP_STATES.SUCCESS
      };
    },
    [itemsLoadTopStoriesSucceeded]: () => {
      return {
        currentStatus: APP_STATES.SUCCESS
      };
    }
  },
  { currentStatus: APP_STATES.PRISTINE }
);
