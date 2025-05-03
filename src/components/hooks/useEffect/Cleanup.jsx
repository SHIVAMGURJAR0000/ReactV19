import "./index.css";
import { useState, useEffect } from "react";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //learnn closure concept
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    //clear for proper running
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p>Hello Everyone</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          numbers <br /> RealTimeounter
        </h3>
      </div>
    </div>
  );
};

// Read for better understanding

// useEffect with setInterval – Summary
// What happens step-by-step:
// Component mounts (renders for the first time).

// useEffect(() => {...}, []) runs once.

// Inside it, setInterval is set up and starts running every 1000ms.

// Every second, the interval callback calls setCount, which:

// Updates the count state.

// Causes the component to re-render.

// BUT useEffect([]) does not run again on re-render (because of empty dependency array []).

// So, a new interval is not created on each re-render.

// The original setInterval keeps running in the background (managed by the browser).

// When the component unmounts, the cleanup function clearInterval() is called to stop the timer.

// Why does this work?
// setInterval runs in the browser’s Web API, separate from React's render cycle.

// The callback inside setInterval uses the setCount(prev => prev + 1) form to always get the latest state.
