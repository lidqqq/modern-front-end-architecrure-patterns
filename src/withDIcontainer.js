import DIcontainer from "./di-container/server.js";
const withDIcontainer = handler => {
  return async (req, res) => {
    req.DIcontainer = DIcontainer;
    return handler(req, res);
  };
};

export default withDIcontainer;
