import { asClass, asFunction, asValue, Lifetime } from "awilix";
import container from "./shared.js";
import ItemRepository from "../infra/Item/ItemRepositoryWithAPIRoutes.js";
import IndexController from "../interfaces/http/index/index.js";

/* registration for client container */
// infra:repository
container.register({
  ItemRepository: asClass(ItemRepository, { lifetime: Lifetime.SINGLETON })
});
// input:controller
container.register({
  IndexController: asClass(IndexController, { lifetime: Lifetime.SCOPED })
});
// consts
container.register({
  HOSTNAME: asValue(
    process.env.NODE_ENV === "production" ? "localhost" : "localhost"
  ),
  PORT: asValue(process.env.PORT || 3000),
  PROTOCOL: asValue(process.env.NODE_ENV === "production" ? "https:" : "http:")
});

export default container;
