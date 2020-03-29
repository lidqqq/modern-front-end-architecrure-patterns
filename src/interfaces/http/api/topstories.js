import executeCreator from "../executeCreator.js";

const handler = async (req, res) => {
  const { DIcontainer } = req;
  const ItemGetTopstories = DIcontainer.resolve("ItemGetTopstories");
  const topStoryIds = await executeCreator(ItemGetTopstories).catch(e => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json(e);
  });
  const P = topStoryIds.slice(0, 10).map(async id => {
    const ItemGetById = DIcontainer.resolve("ItemGetById");
    return executeCreator(ItemGetById, id);
  });
  return Promise.all(P)
    .then(data => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data);
    })
    .catch(e => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json(e);
    });
};

export default handler;
