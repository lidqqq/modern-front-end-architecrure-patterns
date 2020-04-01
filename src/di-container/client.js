import {
  asValue,
  asClass,
  asFunction,
  Lifetime,
  InjectionMode,
  createContainer
} from "awilix";
import fetch from "../infra/fetch/index.js";
import ItemRepository from "../infra/Item/ItemRepositoryWithAPIRoutes.js";
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
// infra:
container.register({
  // common service
  fetch: asFunction(fetch, { lifetime: Lifetime.SINGLETON }),
  // repository
  ItemRepository: asClass(ItemRepository, { lifetime: Lifetime.TRANSIENT })
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
  IndexController: asClass(IndexController, { lifetime: Lifetime.TRANSIENT }),
  AskController: asClass(AskController, { lifetime: Lifetime.TRANSIENT })
});
// consts:
container.register({
  HOSTNAME: asValue(
    process.env.NODE_ENV === "production" ? "localhost" : "localhost"
  ),
  PORT: asValue(process.env.PORT || 3000),
  PROTOCOL: asValue(process.env.NODE_ENV === "production" ? "https:" : "http:")
});

export default container;
