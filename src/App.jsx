// import { NetflixSeries } from "./components/NetflixSeries";
// import "./components/Netflix.css";
import "./components/Netflix.module.css";
import React from "react";
// import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";

export const App = () => {
  return (
    //Passing event handler as props
    // we can pss event handler as props
    // by using this child component can communicate with parent component
    <section className="container">
      {/* <h1 className="common-heading">List of Best Netflix Series</h1> */}
      {/* <NetflixSeries/> */}
      {/* <EventHandling /> */}
      <EventProps />
    </section>
  );
};
