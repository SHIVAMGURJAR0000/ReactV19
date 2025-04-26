import "./components/EV.css";
import { DerivedState } from "./components/hooks/DericedState";
// import { State } from "./components/hooks/state";
import "./components/Netflix.module.css";
import React from "react";

export const App = () => {
  return (
    //Derived State
    <section className="container">
      {/* <State /> */}
      <DerivedState />
    </section>
  );
};

// what is DerivedState

// It is a type of state which is calculated based on the other state and props
