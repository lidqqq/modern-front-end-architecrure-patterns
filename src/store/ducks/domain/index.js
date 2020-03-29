import { ITEM } from "../../consts/actionTypes.js";
import { byId, allIds } from "../../../utils/normalizer/index.js";
export {
  loadStartAction,
  loadErrorAction,
  loadItemByIdAction,
  loadItemByIdSuccessAction,
  loadTopStoriesSuccessAction
} from "./item.js";

export default (state, action) => {
  switch (action.type) {
    case ITEM.LOAD_TOP_STORIES_SUCCESS:
      return {
        items: {
          byId: byId(action.payload),
          allIds: allIds(action.payload)
        }
      };
    case ITEM.LOAD_ITEM_SUCCESS:
      return {
        items: {
          ...state.items,
          byId: {
            ...state.items.byId,
            [action.payload.id]: action.payload
          }
        }
      };
    default:
      return { ...state };
  }
};
