import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
  };
  render() {
    return <div>{this.state.a + " and " + this.state.b}</div>;
  }
}

export default Calculator;
