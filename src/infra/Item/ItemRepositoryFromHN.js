class ItemRepositoryFromHN {
  // hacker news URLS
  API_PATH = {
    TOP_STORIES: "/v0/topstories.json",
    ASK_STORIES: "/v0/askstories.json",
    ITEM: "/v0/item/__id__.json"
  };
  constructor({ fetch }) {
    this.fetch = fetch;
    this.origin = "https://hacker-news.firebaseio.com";
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
  async getAskstories() {
    const path = this.API_PATH.ASK_STORIES;
    const url = new URL(path, this.origin);
    const res = await this.fetch(url.href);
    const data = await res.json();
    // 本来はここで Item Entity に対して new して返してやる必要があると思う
    return data;
  }
}

export default ItemRepositoryFromHN;
