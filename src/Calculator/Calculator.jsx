import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
  };
  add = this.state.a + this.state.b;
  render() {
    const substraction = this.state.a - this.state.b;
    return (
      <div>
        {"Addition : " + this.add}
        <br />
        {"Substraction : " + substraction}
        <br />
        {"Multiplication : " + this.state.a * this.state.b}
        <br />
        {"Divison : " + this.state.a / this.state.b}
      </div>
    );
  }
}

export default Calculator;
