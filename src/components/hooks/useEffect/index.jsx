import { useEffect, useState } from "react";
import "./index.css";
export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  /*  //example 1
      useEffect(() => {
      console.log("hello useEffect");
      // first time when this component run then this will be called.
    }, []);*/

  //example 2
  useEffect(() => {
    console.log("Count value :", count); // this will run one time when the component run first time
    //when the count state change then it matches from the array and tell if count chnage then re-render
  }, [count]);

  return (
    // //example 1
    // <div>
    //   <h1>Hrllo, useEffect</h1>
    // </div>

    <div className="container effect-container">
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
