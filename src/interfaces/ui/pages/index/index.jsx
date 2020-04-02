import { useSelector } from "react-redux";
import Header from "../../parts/ui/Header.jsx";
import {
  itemsTopStoriesSelector,
  appCurrentStatusSelector
} from "../../selectors.js";
import styles from "./index.module.css";

const App = () => {
  const currentStatus = useSelector(appCurrentStatusSelector);
  const topStories = useSelector(itemsTopStoriesSelector);

  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <p>{currentStatus}</p>
        {topStories.length > 0 && (
          <ul>
            {topStories.map((item, idx) => {
              return (
                <li key={item.id} className={styles.li}>
                  <div>
                    {idx + 1}:<a href={item.url}>{item.title}</a>
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
