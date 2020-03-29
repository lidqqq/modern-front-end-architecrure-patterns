import App from "../interfaces/ui/pages/index/index.jsx";
import { loadTopStoriesSuccessAction } from "../store/ducks/domain/index.js";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer } = ctx;
  // data を preload する
  const controller = DIContainer.resolve("IndexController");
  const preloadData = await controller.preloadOnServer();
  // store へ送る
  reduxStore.dispatch(loadTopStoriesSuccessAction(preloadData));
  return {};
};

export default App;
