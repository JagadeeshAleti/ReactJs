import React from "react";
import Movies from "./Movies/Movies";
import Calculator from "./Calculator/Calculator";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/calci" component={Calculator}></Route>
      </Router>
    </div>
  );
}

export default App;
