import React from "react";

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
    showResult: false,
  };
  setA = (e) => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false,
    });
  };
  setB = (e) => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false,
    });
  };
  setResultToTrue = (e) => {
    this.setState({
      showResult: true,
    });
  };
  render() {
    return (
      <div>
        {"Default value of A : " + this.state.a}
        <br /> <br />
        {"Default value of B : " + this.state.b}
        <br /> <br />
        A : <input className="inputA" onChange={this.setA} />
        <br /> <br />
        B : <input className="inputB" onChange={this.setB} />
        <br /> <br />
        <button onClick={this.setResultToTrue}>Result</button>
        <br /> <br />
        {this.state.showResult ? (
          <div>
            <br />
            {"Addition : " + parseInt(this.state.a + this.state.b)}
            <br />
            {"Substraction : " + parseInt(this.state.a - this.state.b)}
            <br />
            {"Multiplication : " + this.state.a * this.state.b}
            <br />
            {"Divison : " + this.state.a / this.state.b}
          </div>
        ) : (
          <div>Click on Result</div>
        )}
      </div>
    );
  }
}

export default Calculator;
