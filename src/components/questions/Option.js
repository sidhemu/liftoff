import React, { Component } from "react";

class OptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <option
        value={this.props.value !== null ? this.props.optionValue.id : null}
      >
        {this.props.optionValue.ans}
      </option>
    );
  }
}

export default OptionComponent;
