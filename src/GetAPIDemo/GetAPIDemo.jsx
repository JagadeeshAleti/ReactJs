import React from "react";
import axios from "axios";
export class GetAPIDemo extends React.Component {
  state = {};
  getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        {this.state.data && (
          <div>
            <p>User ID : {this.state.data.userId}</p>
            <p>Title : {this.state.data.title}</p>
          </div>
        )}
        <button onClick={this.getData}>Click Me</button>
      </div>
    );
  }
}
