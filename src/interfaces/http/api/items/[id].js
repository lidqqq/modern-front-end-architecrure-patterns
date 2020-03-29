import executeCreator from "../../executeCreator.js";
const handler = async (req, res) => {
  // extract params from req onject
  const {
    DIcontainer,
    query: { id }
  } = req;

  // execute use-case
  const ItemGetById = DIcontainer.resolve("ItemGetById");
  return executeCreator(ItemGetById, id)
    .then(data => {
      // set response
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data);
    })
    .catch(e => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json(e);
    });
};
export default handler;
