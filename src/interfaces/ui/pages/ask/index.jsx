import Header from "../../parts/ui/Header.jsx";
import { useSelector } from "react-redux";
import {
  itemsAskStoriesSelector,
  appCurrentStatusSelector
} from "../../selectors.js";
import styles from "./index.module.css";

const App = () => {
  const currentStatus = useSelector(appCurrentStatusSelector);
  const askStories = useSelector(itemsAskStoriesSelector);

  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <p>{currentStatus}</p>
        {askStories.length > 0 && (
          <ul>
            {askStories.map((item, idx) => {
              return (
                <li key={item.id} className={styles.li}>
                  <div>
                    {idx + 1}:<a href="">{item.title}</a>
                    <p>
                      points:{item.score} by:{item.by} comments:
                      {item.descendants}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
