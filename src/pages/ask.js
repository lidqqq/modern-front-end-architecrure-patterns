import App from "../interfaces/ui/pages/ask/index.jsx";
import { loadTopStoriesSuccessAction } from "../store/ducks/domain/index.js";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer } = ctx;
  // data を preload する
  const controller = DIContainer.resolve("AskController");
  const preloadData = await controller.preloadOnServer();
  // store へ送る
  reduxStore.dispatch(loadTopStoriesSuccessAction(preloadData));
  return {};
};

export default App;
