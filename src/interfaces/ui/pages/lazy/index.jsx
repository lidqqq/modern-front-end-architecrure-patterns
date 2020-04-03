import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import {
  appCurrentStatusSelector,
  itemsTopStoriesSelector
} from "../../selectors.js";
import { itemsLoadTopStoriesSucceeded } from "../../../../store/ducks/domain/index.js";
import Header from "../../parts/ui/Header.jsx";
import styles from "./index.module.css";

const Container = ({ children, currentStatus }) => {
  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <p>{currentStatus}</p>
        {children}
      </div>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector(appCurrentStatusSelector);
  const topStories = useSelector(itemsTopStoriesSelector);
  const { data, error } = useSWR("/api/topStories", url =>
    fetch(url)
      .then(r => r.json())
      .then(v => dispatch(itemsLoadTopStoriesSucceeded(v)))
  );
  if (error)
    return (
      <Container currentStatus={currentStatus}>
        <div className={styles.div}>failed to load</div>
      </Container>
    );
  if (!data)
    return (
      <Container currentStatus={currentStatus}>
        <div className={styles.div}>loading...</div>
      </Container>
    );

  return (
    <>
      <Container currentStatus={currentStatus}>
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
      </Container>
    </>
  );
};

export default App;
