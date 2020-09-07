import React from "react";
import Movie from "../Movie/Movie";
import "./styles.css";

class Movies extends React.Component {
  render() {
    return (
      <div className="movies-section">
        <Movie
          name="Maharsi"
          likes="1234.5k"
          banner="https://m.media-amazon.com/images/M/MV5BZWJmMGFiZGItZTU3My00NTZjLWI2NjItNzAzNDM3NmNlNjVhXkEyXkFqcGdeQXVyOTEwNTIwNDQ@._V1_.jpg"
        />

        <Movie
          name="Sahoo"
          likes="5283.7k"
          banner="https://i.pinimg.com/474x/c2/56/5d/c2565df2e1e36bc00150166f1e9caa33.jpg"
        />
        <Movie
          name="Jersey"
          likes="3583.7k"
          banner="https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg"
        />
      </div>
    );
  }
}

export default Movies;
