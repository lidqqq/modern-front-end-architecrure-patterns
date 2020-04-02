import App from "../interfaces/ui/pages/ask/index.jsx";
import { itemsLoadTopStoriesSucceeded } from "../store/ducks/domain/index.js";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer } = ctx;
  // data を preload する
  const controller = DIContainer.resolve("AskController");
  const preloadData = await controller.preloadOnServer();
  // store へ送る
  reduxStore.dispatch(itemsLoadTopStoriesSucceeded(preloadData));
  return {};
};

export default App;
