import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "./reducers";

const LS_KEY = "todo-example-todos";
const CUSTOM_INIT = "@@INIT@@";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocalStorageMiddleware = ({ getState }) => (next) => (action) => {
  const newState = next(action);
  localStorage.setItem(LS_KEY, JSON.stringify(getState()));
  return newState;
};

const persistanceStoreEnhancer = (storeCreator) => {
  return (reducer, preloadedState) => {
    const lsValue = localStorage.getItem(LS_KEY);
    if (lsValue) {
      preloadedState = JSON.parse(lsValue);
    }
    return storeCreator(reducer, preloadedState);
  };
};

const store = createStore(
  mainReducer,
  undefined,
  composeEnhancers(
    persistanceStoreEnhancer,
    applyMiddleware(saveToLocalStorageMiddleware)
  )
);

store.dispatch({
  type: CUSTOM_INIT,
});

export default store;
