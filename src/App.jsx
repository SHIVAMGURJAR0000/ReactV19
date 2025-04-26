// import { NetflixSeries } from "./components/NetflixSeries";
// import "./components/Netflix.css";
import { EventPropagation } from "./components/EventPropagation";
import "./components/Netflix.module.css";
import React from "react";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";

export const App = () => {
  return (
    //Event propogation important ask in interview
    <section className="container">
      {/* <h1 className="common-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries/> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      <EventPropagation />
    </section>
  );
};

//Event propagation in js
/*
1. it refers to the process of how event propogate or travel through the dom hierarchy.
2. In js we there are two phases of event propagation.
3. a) capturing phase  b) bubbling phase.
4 carturing phase - event start from the root of the dom and goes down to the target element
5. target phase - the event reach the target element
6. bubbling phase - the event strt from the target element and bubble up to the root of the dom
*/
