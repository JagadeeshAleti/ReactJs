import React from "react";
import Movie from "./Movie/Movie";
function App() {
  return (
    <div className="App">
      <h1>Hello World!!!!</h1>
      <Movie
        name="Maharsi"
        likes="1234.5k"
        hero="Prince"
        banner="https://m.media-amazon.com/images/M/MV5BZWJmMGFiZGItZTU3My00NTZjLWI2NjItNzAzNDM3NmNlNjVhXkEyXkFqcGdeQXVyOTEwNTIwNDQ@._V1_.jpg"
      />
    </div>
  );
}

export default App;
