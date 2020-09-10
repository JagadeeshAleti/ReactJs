import React from "react";

export class ParentToChild extends React.Component {
  state = {
    name: "Jagadeesh",
    age: 20,
  };
  render() {
    return (
      <div>
        <Child name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <SubChild name={this.props.name} age={this.props.age} />
      </div>
    );
  }
}

class SubChild extends React.Component {
  render() {
    return (
      <div>
        <p>Name : {this.props.name}</p>
        <p>Age : {this.props.age}</p>
      </div>
    );
  }
}
