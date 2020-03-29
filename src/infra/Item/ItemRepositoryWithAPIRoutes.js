class ItemRepositoryWithAPIRoutes {
  // hacker news URLS
  API_PATH = {
    TOP_STORIES: "/api/topstories",
    ITEM: "/api/items/__id__"
  };
  constructor({ fetch, HOSTNAME, PORT, PROTOCOL }) {
    this.fetch = fetch;
    this.origin = `${PROTOCOL}//${HOSTNAME}:${PORT}`;
  }
  async getById(id) {
    const path = this.API_PATH.ITEM.replace("__id__", id);
    const url = new URL(path, this.origin);
    const res = await this.fetch(url.href);
    const data = await res.json();
    // 本来はここで Item Entity に対して new して返してやる必要があると思う
    return data;
  }
  async getTopstories() {
    const path = this.API_PATH.TOP_STORIES;
    const url = new URL(path, this.origin);
    const res = await this.fetch(url.href);
    const data = await res.json();
    // 本来はここで Item Entity に対して new して返してやる必要があると思う
    return data;
  }
}

export default ItemRepositoryWithAPIRoutes;
