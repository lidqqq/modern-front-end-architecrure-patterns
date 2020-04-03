import executeCreator from "../executeCreator.js";

export default class IndexController {
  constructor({ ItemGetById }) {
    this.ItemGetById = ItemGetById;
  }
  async preloadOnServer(id) {
    const topStories = await executeCreator(this.ItemGetById, id);
    return topStories;
  }
}
