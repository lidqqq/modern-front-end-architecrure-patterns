// it's a ItemRepository Interface
class ITFItemRepository {
  constructor({ fetch }) {
    this.fetch = fetch;
  }
  async getById(id) {}
  async getTopstories() {}
  async getAskstories() {}
}

export default ITFItemRepository;
