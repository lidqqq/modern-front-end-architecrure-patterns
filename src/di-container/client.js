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
  fetch: asFunction(fetch).singleton(),
  // repository
  ItemRepository: asClass(ItemRepository).singleton()
});
// app:use-case
container.register({
  ItemGetTopstories: asClass(ItemGetTopstories).transient(),
  ItemGetById: asClass(ItemGetById).transient(),
  ItemGetAskstories: asClass(ItemGetAskstories).transient()
});
// input:controller
container.register({
  IndexController: asClass(IndexController).transient(),
  AskController: asClass(AskController).transient()
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
