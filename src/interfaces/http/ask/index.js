import executeCreator from "../executeCreator.js";

export default class AskController {
  constructor({ ItemGetAskstories }) {
    this.ItemGetAskstories = ItemGetAskstories;
  }
  async preloadOnServer() {
    const askStories = await executeCreator(this.ItemGetAskstories);
    return askStories;
  }
}
