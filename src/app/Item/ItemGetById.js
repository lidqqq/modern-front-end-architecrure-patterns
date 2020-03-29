import EventEmitter from "events";

export default class ItemGetById extends EventEmitter {
  constructor({ ItemRepository }) {
    super();
    this.ItemRepository = ItemRepository;
  }
  execute(id) {
    this.ItemRepository.getById(id)
      .then(res => {
        this.emit("SUCCESS", res);
      })
      .catch(error => {
        if (error.message === "ServerError") {
          return this.emit("SERVER_ERROR", error);
        }
        this.emit("ERROR", error);
      });
  }
}
