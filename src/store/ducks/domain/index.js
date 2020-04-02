import { createReducer } from "@reduxjs/toolkit";
import { byId, allIds } from "../../../utils/normalizer/index.js";
import {
  itemsLoadTopStoriesSucceeded,
  itemsLoadByIdSucceeded
} from "./item.js";
export {
  loadStart,
  loadError,
  itemsLoadTopStoriesSucceeded,
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
