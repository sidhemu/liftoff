import { combineReducers } from "redux";
import questions from "./questions";
import solution from "./solutions";
import graphData from "./graphData";

export default combineReducers({
  questions,
  solution,
  graphData
});
