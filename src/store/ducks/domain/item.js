import { ITEM, COMMON } from '../../consts/actionTypes.js';

// simple action creators
export const loadTopStoriesSuccessAction = payload => {
  return {
    type: ITEM.LOAD_TOP_STORIES_SUCCESS,
    payload
  };
};

export const loadItemByIdSuccessAction = payload => {
  return {
    type: ITEM.LOAD_ITEM_SUCCESS,
    payload
  };
};

export const loadErrorAction = (err) => {
  return {
    type: COMMON.LOAD_ERROR,
    err
  };
};

export const loadStartAction = () => {
  return {
    type: COMMON.LOAD_START
  };
};

// side-effect action creators
export const loadItemByIdAction = id => (dispath, getState, { container }) => {
  dispath(loadStartAction());
  const { domain } = getState();
  const resolvedIds = domain.items.allIds;
  if (id in resolvedIds) {
    return;
  }
  const ItemGetById = container.resolve('ItemGetById');
  return new Promise((resolve, reject) => {
    ItemGetById.on('SUCCESS', data => {
      resolve(data);
    })
      .on('SERVER_ERROR', error => {
        reject({
          type: 'ServerError',
          details: error.details
        });
      })
      .on('ERROR', error => {
        reject({
          type: 'Error',
          details: error.details
        });
      });

    ItemGetById.execute(id);
  })
    .then(item => {
      dispath(loadItemByIdSuccessAction(item));
    })
    .catch(e => {
      dispath(loadErrorAction(e))
    });
};
