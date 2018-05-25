import React, { Component } from "react";

class OptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <option value={this.props.optionValue.id}>
        {this.props.optionValue.ans}
      </option>
    );
  }
}

export default OptionComponent;
