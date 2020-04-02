import { createAction } from "@reduxjs/toolkit";

// simple action creators
export const itemsLoadTopStoriesSucceeded = createAction(
  "items/loadTopStoriesSucceeded"
);

export const itemsLoadByIdSucceeded = createAction(
  "items/loadItemByIdSucceeded"
);

export const loadError = createAction("common/loadErr");

export const loadStart = createAction("common/loadStart");

// side-effect action creators
export const itemsLoadByIdAction = id => (dispath, getState, { container }) => {
  dispath(loadStart());
  const { domain } = getState();
  const resolvedIds = domain.items.allIds;
  if (id in resolvedIds) {
    return;
  }
  const ItemGetById = container.resolve("ItemGetById");
  return new Promise((resolve, reject) => {
    ItemGetById.on("SUCCESS", data => {
      resolve(data);
    })
      .on("SERVER_ERROR", error => {
        reject({
          type: "ServerError",
          details: error.details
        });
      })
      .on("ERROR", error => {
        reject({
          type: "Error",
          details: error.details
        });
      });

    ItemGetById.execute(id);
  })
    .then(item => {
      dispath(itemsLoadByIdSucceeded(item));
    })
    .catch(e => {
      dispath(loadError(e));
    });
};
