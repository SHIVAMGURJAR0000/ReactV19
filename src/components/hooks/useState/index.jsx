import "../hooks.css";
import { useState } from "react";

export const Counter = () => {
  // return an array of two element in which first value is 5
  // console.log(useState(5));

  const [count, setCount] = useState(0);
  return (
    <div
      className="container state-container"
      style={{
        textAlign: "center",
      }}
    >
      <h1>useState Hook!</h1>
      <br />
      <p>{count}</p>
      <button
        style={{
          padding: "0.6rem, 0",
          cursor: "pointer",
          backgroundColor: "rgb(4,4,4)",
          color: "#fff",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
