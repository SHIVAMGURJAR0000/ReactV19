import "./components/EV.css";

import "./components/Netflix.module.css";
import React from "react";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";

export const App = () => {
  return (
    // project
    <section className="container">
      <ToggleSwitch />
    </section>
  );
};
