import React from "react";
import "./style.css";

export class ChildToParent extends React.Component {
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
        <h3>Parent Data</h3>
        <p>Name: {this.state.name}</p>
        <p>Age : {this.state.age}</p>
        <br />
        <Child onChange={this.getData} />
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    name: "Jagadeesh",
    age: 20,
  };
  onClickListner = () => {
    this.props.onChange(this.state.name, this.state.age);
  };
  render() {
    return (
      <div>
        Child To Parent
        <button onClick={this.onClickListner}>Send Data</button>
        <br />
        <br />
        <h3>Child Data</h3>
        <p>Name: {this.state.name}</p>
        <p>Age : {this.state.age}</p>
      </div>
    );
  }
}
