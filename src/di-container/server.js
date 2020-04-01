import {
  InjectionMode,
  asClass,
  asFunction,
  Lifetime,
  createContainer
} from "awilix";
import fetch from "../infra/fetch/index.js";
import ItemRepository from "../infra/Item/ItemRepositoryFromHN.js";
import ItemGetTopstories from "../app/Item/ItemGetTopstories.js";
import ItemGetById from "../app/Item/ItemGetById.js";
import ItemGetAskstories from "../app/Item/ItemGetAskstories.js";

// create DI container
const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

/* registration */
// infra:
container.register({
  // common service
  fetch: asFunction(fetch, { lifetime: Lifetime.SINGLETON }),
  // repository
  ItemRepository: asClass(ItemRepository, { lifetime: Lifetime.SINGLETON })
});
// app:use-case
container.register({
  ItemGetTopstories: asClass(ItemGetTopstories, {
    lifetime: Lifetime.TRANSIENT
  }),
  ItemGetById: asClass(ItemGetById, { lifetime: Lifetime.TRANSIENT }),
  ItemGetAskstories: asClass(ItemGetAskstories, {
    lifetime: Lifetime.TRANSIENT
  })
});

export default container;
