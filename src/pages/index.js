import App from "../interfaces/ui/pages/index/index.jsx";
import { itemsLoadTopStoriesSucceeded } from "../store/ducks/domain/index.js";

const controllerName = "IndexController";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer } = ctx;
  // data を preload する
  const controller = DIContainer.resolve(controllerName);
  const preloadData = await controller.preloadOnServer();
  // store へ送る
  reduxStore.dispatch(itemsLoadTopStoriesSucceeded(preloadData));
  return {};
};

export default App;
