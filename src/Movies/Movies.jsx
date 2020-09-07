import React from "react";
import Movie from "../Movie/Movie";
import "./styles.css";

class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };

  render() {
    return (
      <div className="movies-section">
        {this.getMovie(
          "Maharsi",
          "1234.5k",
          "https://m.media-amazon.com/images/M/MV5BZWJmMGFiZGItZTU3My00NTZjLWI2NjItNzAzNDM3NmNlNjVhXkEyXkFqcGdeQXVyOTEwNTIwNDQ@._V1_.jpg"
        )}

        {this.getMovie(
          "Sahoo",
          "5283.7k",
          "https://i.pinimg.com/474x/c2/56/5d/c2565df2e1e36bc00150166f1e9caa33.jpg"
        )}

        {this.getMovie(
          "Jersey",
          "3583.2k",
          "https://i.pinimg.com/736x/2b/9f/e4/2b9fe45f7ad9752821b868c3f5410df9.jpg"
        )}
      </div>
    );
  }
}

export default Movies;
