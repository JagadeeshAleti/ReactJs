import React from "react";
import Calculator from "./Calculator/Calculator";
import Movies from "./Movies/Movies";
import { ParentToChild } from "./ParentToChild/ParentToChild";
import { ChildToParent } from "./ChildToParent/ChildToParent";
import { SiblingCommunication } from "./SiblingCommunication/SiblingCommunication";
import { Route, Router } from "react-router-dom";
export function CustomRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/calci" component={Calculator}></Route>
      <Route path="/parent-to-child" component={ParentToChild}></Route>
      <Route path="/child-to-parent" component={ChildToParent}></Route>
      <Route
        path="/sibling-to-sibling"
        component={SiblingCommunication}
      ></Route>
    </div>
  );
}
