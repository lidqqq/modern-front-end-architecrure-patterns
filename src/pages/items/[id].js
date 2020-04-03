import App from "../../interfaces/ui/pages/items/[id].jsx";
import { appCtxLoaded } from "../../store/ducks/app/index.js";
import { itemsLoadByIdSucceeded } from "../../store/ducks/domain/index.js";

const controllerName = "ItemsIdController";

App.getInitialProps = async ctx => {
  // これらは src/withReduxAndDIcontainer.js で injection している
  const { reduxStore, DIContainer, query } = ctx;
  // store へ送る
  reduxStore.dispatch(appCtxLoaded({ query }));

  // data を preload する
  const { id } = query;
  const controller = DIContainer.resolve(controllerName);
  const preloadData = await controller.preloadOnServer(id);
  // store へ送る
  reduxStore.dispatch(itemsLoadByIdSucceeded(preloadData));
  return {};
};

export default App;
