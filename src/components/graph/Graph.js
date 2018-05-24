import React, { Component } from "react";
import { connect } from "react-redux";
import BarChart from "react-bar-chart";

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      data: []
    };
  }

  componentDidMount = () => {
    this.setState({ data: [...this.props.graphData] });
    window.onresize = () => {
      this.setState({ width: this.refs.root.offsetWidth });
    };
  };

  render() {
    return (
      <div ref="root">
        <div style={{ width: "50%" }}>
          <BarChart
            ylabel="Number"
            width={this.state.width}
            height={500}
            margin={margin}
            data={this.state.data}
            onBarClick={this.handleBarClick}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(Graph);
