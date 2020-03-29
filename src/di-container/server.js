import { asClass, Lifetime } from "awilix";
import container from "./shared.js";
import ItemRepository from "../infra/Item/ItemRepositoryFromHN.js";

/* registration for server container */
// infra:repository
container.register({
  ItemRepository: asClass(ItemRepository, { lifetime: Lifetime.TRANSIENT })
});

export default container;
