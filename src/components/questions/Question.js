import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { graphData, updateData } from "../../actions";

import QuestionBox from "./QuestionBox";

import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearData: ""
    };
    this.clearValues = this.clearValues.bind(this);
    this.submitSolution = this.submitSolution.bind(this);
  }

  clearValues(e) {
    // console.log(e);
    this.setState({ clearData: null });
  }

  submitSolution() {
    if (Object.keys(this.props.solution).length < 4) {
      alert("Please answer all questions");
    } else {
      // console.log("submitting solution ", this.props.solution);
      this.props.graphData(this.props.solution);
      this.props.updateData();
    }
  }

  render() {
    return (
      <div>
        <div className="question-container">
          <div className="question-text">
            {this.props.questions.map((ques, index) => {
              return (
                <QuestionBox
                  key={index}
                  quesData={ques}
                  questionIndex={index}
                  clearData={this.state.clearData}
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
      </div>
    );
  }
}

function mapStateToProps(state, dispa) {
  return state;
}

export default connect(mapStateToProps, { graphData, updateData })(Question);
