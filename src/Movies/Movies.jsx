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
        {Object.keys(this.state).map((movie) => {
          return this.getMovie(this.state[movie]);
        })}
      </div>
    );
  }
}

export default Movies;
