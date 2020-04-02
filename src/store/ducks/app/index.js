import { createAction, createReducer } from "@reduxjs/toolkit";
import {
  loadStart,
  loadError,
  itemsLoadByIdSucceeded,
  itemsLoadTopStoriesSucceeded
} from "../domain/index.js";
import APP_STATES from "../../consts/appStates.js";

export const commonLoadStart = createAction("common/loadStart");

export default createReducer(
  { currentStatus: APP_STATES.PRISTINE },
  {
    [loadStart]: () => {
      return {
        currentStatus: APP_STATES.SUBMITTING
      };
    },
    [loadError]: () => {
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
  }
);
