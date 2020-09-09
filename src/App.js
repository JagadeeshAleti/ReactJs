import React from "react";
import { CustomRouter } from "./CustomRouter";
import { Links } from "./Links";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <hr></hr>
      <div className="router">
        <Router>
          <Links />
          <hr />
          <CustomRouter />
        </Router>
      </div>
    </div>
  );
}

export default App;
