import { useSelector } from "react-redux";
import Header from "../../parts/ui/Header.jsx";
import styles from "./index.module.css";

const App = () => {
  const currentStatus = useSelector(state => {
    return state.appStates.currentStatus;
  });
  const items = useSelector(state => state.domain.items);

  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <p>{currentStatus}</p>
        {items.allIds.length > 0 && (
          <ul>
            {Object.keys(items.byId).map((id, idx) => {
              const item = items.byId[id];
              return (
                <li key={id} className={styles.li}>
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
