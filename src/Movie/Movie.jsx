import * as React from "react";
import "./style.css";

function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.banner} />
      <label>
        {props.name} {props.likes}
      </label>
    </div>
  );
}

export default Movie;
