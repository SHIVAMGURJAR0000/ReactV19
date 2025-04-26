import "./components/EV.css";

import { LiftingState } from "./components/LiftStateUp";

import "./components/Netflix.module.css";
import React from "react";

export const App = () => {
  return (
    //Lift State up in react
    <section className="container">
      <LiftingState />
    </section>
  );
};

// Lift state Up
// Its means let say you  have one component A which is parent component
// it has two child C and D
// C  has some state.
// D want the same state.
// C will pass state to parent
// now D can use this state .
// parent will send data using props
