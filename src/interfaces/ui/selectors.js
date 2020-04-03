import { createSelector } from "reselect";

const itemsSelector = state => state.domain.items.byId;
const itemsTopStoriesIdsSelector = state => state.domain.items.topIds;
const itemsAskStoriesIdsSelector = state => state.domain.items.askIds;
const appCtxQuerySelector = state => {
  console.log(state);

  return state.app.ctx.query;
};

export const itemsTopStoriesSelector = createSelector(
  [itemsSelector, itemsTopStoriesIdsSelector],
  (items, topIds) => topIds.map(idx => items[idx])
);

export const itemsAskStoriesSelector = createSelector(
  [itemsSelector, itemsAskStoriesIdsSelector],
  (items, askIds) => askIds.map(idx => items[idx])
);

export const itemsGetByIdSelector = createSelector(
  [itemsSelector, (_, id) => id],
  (items, id) => items[id]
);

export const appCurrentStatusSelector = createSelector(
  state => state.app.currentStatus,
  currentStatus => currentStatus
);

export const appCtxQueryByKeySelector = createSelector(
  [appCtxQuerySelector, (_, key) => key],
  (query, key) => query[key]
);
