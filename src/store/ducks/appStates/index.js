import { ITEM, COMMON } from '../../consts/actionTypes.js';
import APP_STATES from "../../consts/appStates.js"

export default (state, action) => {
  switch (action.type) {
    case COMMON.LOAD_START:
      return {
        currentStatus: APP_STATES.SUBMITTING
      };
    case COMMON.LOAD_ERROR:
      return {
        currentStatus: APP_STATES.INVALID
      };
    case ITEM.LOAD_ITEM_SUCCESS:
      return {
        currentStatus: APP_STATES.SUCCESS
      };
    default:
      return { ...state };
  }
};
