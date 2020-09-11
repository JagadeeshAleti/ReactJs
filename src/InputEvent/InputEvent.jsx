import React from "react";

export class InputEvent extends React.Component {
  state = {
    number: undefined,
    show: false,
  };
  onNumberChange = (event) => {
    this.setState({
      number: event.target.value,
    });
  };
  evenrOdd = () => {
    if (this.state.number === undefined) {
      return "";
    }
    if (this.state.number % 2 === 0) {
      return "Even";
    }
    return "Odd";
  };
  showOutput = () => {
    this.setState({
      show: true,
    });
  };
  hideOutput = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={this.onNumberChange}
          onBlur={this.showOutput}
          onFocus={this.hideOutput}
        />
        {this.state.show && <p>{this.evenrOdd()}</p>}
      </div>
    );
  }
}
