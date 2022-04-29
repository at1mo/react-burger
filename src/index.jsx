import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk from "redux-thunk";

import "./index.css";

// Настраиваем расширение Redux DevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// Расширитель хранилища (applyMiddleware) принимает в качестве аргумента усилитель
const enhancer = composeEnhancers(applyMiddleware(thunk));

// Инициализируем хранилище, использовав расширитель
const store = createStore(rootReducer, enhancer);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
