import { createReducer } from "@reduxjs/toolkit";
import { byId, allIds } from "../../../utils/normalizer/index.js";
import {
  itemsLoadTopStoriesSucceeded,
  itemsLoadAskStoriesSucceeded,
  itemsLoadByIdSucceeded
} from "./item.js";
export {
  loadStart,
  loadError,
  itemsLoadTopStoriesSucceeded,
  itemsLoadAskStoriesSucceeded,
  itemsLoadByIdSucceeded,
  itemsLoadByIdAction
} from "./item.js";

export default createReducer(
  {
    items: {
      byId: {},
      allIds: []
    }
  },
  {
    [itemsLoadTopStoriesSucceeded]: (_, action) => {
      return {
        items: {
          byId: byId(action.payload),
          allIds: allIds(action.payload)
        }
      };
    },
    [itemsLoadAskStoriesSucceeded]: (_, action) => {
      return {
        items: {
          byId: byId(action.payload),
          allIds: allIds(action.payload)
        }
      };
    },
    [itemsLoadByIdSucceeded]: (state, action) => {
      return {
        items: {
          ...state.items,
          byId: {
            ...state.items.byId,
            [action.payload.id]: action.payload
          }
        }
      };
    }
  }
);
