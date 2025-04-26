import "./components/EV.css";
import { DerivedState } from "./components/hooks/DericedState";
// import { State } from "./components/hooks/state";
import "./components/Netflix.module.css";
import React from "react";

export const App = () => {
  return (
    //React State
    <section className="container">
      {/* <State /> */}
      <DerivedState />
    </section>
  );
};

// state is a object htat hold the data about the component. state is like variable here
// if state value changes then the componenet re render to reflect these change
// state is dynamic and mutable
