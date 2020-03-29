import {
  asClass,
  asFunction,
  createContainer,
  InjectionMode,
  Lifetime
} from "awilix";
import fetch from "../infra/fetch/index.js";
import ItemGetTopstories from "../app/Item/ItemGetTopstories";
import ItemGetById from "../app/Item/ItemGetById";

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
  })
});
container.register({
  ItemGetById: asClass(ItemGetById, { lifetime: Lifetime.TRANSIENT })
});

export default container;
