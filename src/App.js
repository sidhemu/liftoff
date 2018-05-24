import React, { Component } from "react";

import "./App.css";

import Question from "./components/questions/Question";
import Graph from "./components/graph/Graph";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <header>Cricket Trivia</header>
        </div>

        <div className="container">
          <div className="question-section">
            <Question />
          </div>
          <div className="graph-section">
            <Graph />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
