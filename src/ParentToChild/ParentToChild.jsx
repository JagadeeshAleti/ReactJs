import React from "react";

export class ParentToChild extends React.Component {
  state = {
    Name: "Jagadeesh",
    age: 21,
  };
  render() {
    return (
      <div>
        <Child Name={this.state.Name} age={this.state.age} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>Name : {this.props.Name}</p>
        <p>Age : {this.props.age}</p>
      </div>
    );
  }
}
