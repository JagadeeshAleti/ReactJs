import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
  };
  setA = (e) => {
    this.setState({
      a: parseInt(e.target.value),
    });
  };
  setB = (e) => {
    this.setState({
      b: parseInt(e.target.value),
    });
  };
  render() {
    const substraction = this.state.a - this.state.b;
    const add = this.state.a + this.state.b;
    return (
      <div>
        A : <input className="inputA" onChange={this.setA} />
        <br /> <br />
        B : <input className="inputB" onChange={this.setB} />
        <br /> <br />
        {"A : " + this.state.a + " " + "B : " + this.state.b}
        <br /> <br />
        {"Addition : " + add}
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
