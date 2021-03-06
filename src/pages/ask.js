import App from "../interfaces/ui/pages/ask/index.jsx";
import { itemsLoadAskStoriesSucceeded } from "../store/ducks/domain/index.js";

const controllerName = "AskController";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer } = ctx;
  // data を preload する
  const controller = DIContainer.resolve(controllerName);
  const preloadData = await controller.preloadOnServer();
  // store へ送る
  reduxStore.dispatch(itemsLoadAskStoriesSucceeded(preloadData));
  return {};
};

export default App;
