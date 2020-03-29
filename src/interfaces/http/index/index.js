import executeCreator from "../executeCreator.js";

export default class IndexController {
  constructor({ ItemGetTopstories }) {
    this.ItemGetTopstories = ItemGetTopstories;
  }
  async preloadOnServer() {
    const topStories = await executeCreator(this.ItemGetTopstories);
    return topStories;
  }
}
