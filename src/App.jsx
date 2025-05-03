import React from "react";
import { ReactUseEffect } from "./components/hooks/useEffect";

export const App = () => {
  //  useEffect hook
  return <ReactUseEffect />;
};

//Threory

// handling side effect in function component
// it has nothing related to state.

//waht is side effect

/*In React (and in programming in general), a side effect is anything a function does that affects something
 outside of its own scope or has observable interaction with the outside world.

-Common Examples of Side Effects:
Updating the DOM directly.
Making API calls (e.g., fetch, axios).
Using setTimeout / setInterval.
Reading or writing to localStorage.
Subscribing/unsubscribing to events (like WebSocket or window events).
Manipulating browser cookies.
Logging, analytics, or telemetry.
Modifying global variables or shared state.*/

// synatx

/*useEffect(()={
  // your side effect code.

return ()=>{
 // Clean up code here (optional)
};

},[dependencies]); */

// when the componnent mounts useEffect can run its effect function to perform operations like data fectching.(intial rendering).

// dependencies : its ans second argument its an array, it determines when the effect should re-run, if any value in thsi array changes , the effect will re-run.

// Cleanup: useEffect return a clean up function to clean up after the effect such as unsubscribing from an even tor clearing a timer.

// what is side effect with example

/*
let count = 0;

function increment() {
  count += 1; // updating a vataible and here is variable is not scope of here, its outsider
}

increment(); //call a func
console.log(count) 
This is an example of sideEffect in which increment updating the external variable , here increment is not a pure function*/

/* In react , functions are pure, meaning they return the 
same output for the same input without causing side effects */

// while fetching data we use side effect
// state update: The fetched data will usually update the compenent's state, causing a re-render.
