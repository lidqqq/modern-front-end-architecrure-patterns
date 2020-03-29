import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { loadItemByIdAction } from "../../../../store/ducks/domain/index.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const App = () => {
  const dispath = useDispatch();
  const currentStatus = useSelector(state => {
    return state.appStates.currentStatus;
  });
  const items = useSelector(state => state.domain.items);

  const onClick = useCallback(() => {
    const int = getRandomInt(10);
    const id = items.allIds[int];
    dispath(loadItemByIdAction(id));
  }, [items, getRandomInt, dispath, loadItemByIdAction]);

  return (
    <div>
      <p>{currentStatus}</p>
      <button onClick={onClick}>get random id</button>
      <ul>
        {Object.keys(items.byId).map((id, idx) => {
          const item = items.byId[id];
          return (
            <li key={id}>
              <div>
                {idx + 1}:<a href={item.url}>{item.title}</a>
                <p>
                  points:{item.score} by:{item.by} comments:{item.descendants}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
