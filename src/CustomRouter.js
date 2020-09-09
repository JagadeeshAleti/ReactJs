import React from "react";
import Calculator from "./Calculator/Calculator";
import Movies from "./Movies/Movies";
import { Route } from "react-router-dom";
export function CustomRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/calci" component={Calculator}></Route>
    </div>
  );
}
