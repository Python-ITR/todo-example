import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./views/MainView";
import TodoView from "./views/TodoView";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/todo">
            <TodoView />
          </Route>
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
