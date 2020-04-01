import executeCreator from "../executeCreator.js";

const handler = async (req, res) => {
  const { DIcontainer } = req;
  const ItemGetAskstories = DIcontainer.resolve("ItemGetAskstories");
  const askStoryIds = await executeCreator(ItemGetAskstories).catch(e => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).json(e);
  });
  if (!askStoryIds) {
    return;
  }

  const P = askStoryIds.slice(0, 10).map(async id => {
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
