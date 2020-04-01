import {
  asClass,
  asFunction,
  createContainer,
  InjectionMode,
  Lifetime
} from "awilix";
import fetch from "../infra/fetch/index.js";
import ItemGetTopstories from "../app/Item/ItemGetTopstories.js";
import ItemGetById from "../app/Item/ItemGetById.js";
import ItemGetAskstories from "../app/Item/ItemGetAskstories.js";
import IndexController from "../interfaces/http/index/index.js";
import AskController from "../interfaces/http/ask/index.js";

// create DI container
const container = createContainer({
  injectionMode: InjectionMode.PROXY
});

/* registration */
// infra:common service
container.register({
  fetch: asFunction(fetch, { lifetime: Lifetime.SINGLETON })
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
// input:controller
container.register({
  IndexController: asClass(IndexController, { lifetime: Lifetime.SCOPED }),
  AskController: asClass(AskController, { lifetime: Lifetime.SCOPED })
});

export default container;
