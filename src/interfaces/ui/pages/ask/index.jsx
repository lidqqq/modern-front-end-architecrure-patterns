import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";

const App = () => {
  const dispath = useDispatch();
  const currentStatus = useSelector(state => {
    return state.appStates.currentStatus;
  });
  const items = useSelector(state => state.domain.items);

  return (
    <>
      <div className={styles.container}>
        <p>{currentStatus}</p>
        {items.allIds.length > 0 && (
          <ul>
            {Object.keys(items.byId).map((id, idx) => {
              const item = items.byId[id];
              return (
                <li key={id}>
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
