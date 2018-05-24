import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";

//import the root reducer
import rootReducer from "./reducers/index";

import data from "./data/Data";
import options from "./data/Option";

const defaultState = {
  questions: data.questions,
  options
};

const store = createStore(rootReducer, defaultState);

export default store;
