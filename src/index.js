import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import rootReducer from "./reducers";
import questionData from "./data/Data";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const questions = questionData.questions;
const solution = questionData.solution;
const graphData = questionData.graphData;

const defaultState = {
  questions,
  solution,
  graphData
};

console.log(defaultState);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

const store = createStore(rootReducer, defaultState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
