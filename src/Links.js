import React from "react";
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div className="links">
      <Link to="/movies">Movies</Link>
      <br />
      <Link to="/calci">Calculator</Link>
      <br />
      <Link to="/parent-to-child">Parent To Child</Link>
      <br />
      <Link to="/child-to-parent">Child To Parent</Link>
      <br />
      <Link to="/sibling-to-sibling">Sibling To Sibling</Link>
      <br />
      <Link to="/input-event">Input Event</Link>
      <br />
      <Link to="/get-api">Get API Demo</Link>
    </div>
  );
}
