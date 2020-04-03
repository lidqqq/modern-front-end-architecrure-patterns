import { createReducer } from "redux-act";
import { byId, allIds } from "../../../utils/normalizer/index.js";
import {
  itemsLoadTopStoriesSucceeded,
  itemsLoadAskStoriesSucceeded,
  itemsLoadByIdSucceeded
} from "./item.js";
export {
  itemsLoadTopStoriesSucceeded,
  itemsLoadAskStoriesSucceeded,
  itemsLoadByIdSucceeded,
  itemsLoadByIdAction
} from "./item.js";

export default createReducer(
  {
    [itemsLoadTopStoriesSucceeded]: (state, payload) => {
      return {
        items: {
          ...state.items,
          byId: {
            ...state.items.byId,
            ...byId(payload)
          },
          allIds: [...state.items.allIds, ...allIds(payload)],
          topIds: allIds(payload)
        }
      };
    },
    [itemsLoadAskStoriesSucceeded]: (state, payload) => {
      return {
        items: {
          ...state.items,
          byId: { ...state.items.byId, ...byId(payload) },
          allIds: [...state.items.allIds, ...allIds(payload)],
          askIds: allIds(payload)
        }
      };
    },
    [itemsLoadByIdSucceeded]: (state, payload) => {
      return {
        ...state,
        items: {
          ...state.items,
          byId: { ...state.items.byId, ...byId([payload]) },
          allIds: [...state.items.allIds, ...allIds([payload])]
        }
      };
    }
  },
  {
    items: {
      byId: {},
      allIds: [],
      askIds: [],
      topIds: []
    }
  }
);
