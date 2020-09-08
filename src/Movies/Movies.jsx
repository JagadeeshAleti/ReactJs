import React from "react";
import Movie from "../Movie/Movie";
import movies from "./movies/movies";
import "./styles.css";

class Movies extends React.Component {
  state = { ...movies };
  getMovie = (movie) => {
    return (
      <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
    );
  };

  render() {
    return (
      <div className="movies-section">
        {this.getMovie(this.state.Maharsi)}

        {this.getMovie(this.state.Sahoo)}

        {this.getMovie(this.state.Jersey)}
      </div>
    );
  }
}

export default Movies;
