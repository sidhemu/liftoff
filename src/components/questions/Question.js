import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";

import Graph from "../graph/Graph";

import { graphData, clearData } from "../../actions";

import QuestionBox from "./QuestionBox";

import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      reset: false,
      graphData: []
    };
    this.clearValues = this.clearValues.bind(this);
    this.submitSolution = this.submitSolution.bind(this);
  }

  clearValues(e) {
    this.setState({ value: "", reset: true });
    this.props.clearData();
  }

  submitSolution() {
    if (Object.keys(this.props.solution).length < 4) {
      alert("Please answer all questions");
    } else {
      this.props.graphData(this.props.solution);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="question-container">
          <div className="question-text">
            {this.props.questions.map((ques, index) => {
              return (
                <QuestionBox
                  key={index}
                  quesData={ques}
                  questionIndex={index}
                />
              );
            })}
          </div>
          <div className="submit-sec">
            <ButtonToolbar>
              <Button onClick={() => this.submitSolution()}>Submit</Button>
              <Button onClick={e => this.clearValues(e)}>Clear Values</Button>
            </ButtonToolbar>
          </div>
        </div>
        <div className="graph-container">
          <Graph />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, dispa) {
  return state;
}

export default connect(mapStateToProps, { graphData, clearData })(Question);
