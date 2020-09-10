import React from "react";

export class SiblingCommunication extends React.Component {
  state = {};
  getData = (name, age) => {
    this.setState({
      name: name,
      age: age,
    });
  };
  render() {
    return (
      <div>
        <Child1 onChange={this.getData} />
        <br />
        <Child2 name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

class Child1 extends React.Component {
  state = {
    name: "jagadeesh",
    age: 20,
  };
  onClickListner = () => {
    this.props.onChange(this.state.name, this.state.age);
  };
  render() {
    return (
      <div>
        <h3>Child1 Data</h3>
        <p>Name : {this.state.name}</p>
        <p>Age : {this.state.age}</p>
        <br />
        Child1 To Parent
        <button onClick={this.onClickListner}>Send Data</button>
      </div>
    );
  }
}
class Child2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Child2 Data</h3>
        <p>Name : {this.props.name}</p>
        <p>Age : {this.props.age}</p>
      </div>
    );
  }
}
