import { useSelector } from "react-redux";
import {
  appCtxQueryByKeySelector,
  itemsGetByIdSelector
} from "../../selectors.js";
// import styles from "./index.module.css";

const App = () => {
  const id = useSelector(state => appCtxQueryByKeySelector(state, "id"));
  const item = useSelector(state => itemsGetByIdSelector(state, id));

  return (
    <>
      <div>
        <p>{item.title}</p>
        <p>
          points:{item.score} by:{item.by} comments:
          {item.descendants}
        </p>
        <p>{item.text}</p>
      </div>
    </>
  );
};

export default App;
