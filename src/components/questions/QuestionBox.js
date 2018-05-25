import React, { Component } from "react";
import { connect } from "react-redux";
import { Panel, ControlLabel, FormGroup, FormControl } from "react-bootstrap";
import { solution } from "../../actions";

import OptionComponent from "./Option";

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false
    };
    this.onPickAnswer = this.onPickAnswer.bind(this);
  }
  onPickAnswer(e) {
    this.props.solution(this.props.questionIndex, this.inputEl.value);
  }

  compo;

  render() {
    return (
      <Panel>
        <Panel.Heading>{this.props.quesData.question}</Panel.Heading>
        <Panel.Body>
          <div className="option-div">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select Answer</ControlLabel>
              <FormControl
                onChange={this.onPickAnswer}
                inputRef={el => (this.inputEl = el)}
                componentClass="select"
                placeholder="Select Answer"
              >
                <option value="">Select Answer</option>
                {this.props.quesData.options.map((opt, index) => {
                  return (
                    <OptionComponent
                      key={index}
                      questionIndex={index}
                      optionValue={opt}
                    />
                  );
                })}
              </FormControl>
            </FormGroup>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default connect(null, { solution })(QuestionBox);
