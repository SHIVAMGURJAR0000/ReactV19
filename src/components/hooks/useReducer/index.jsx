import { useReducer, useState } from "react";

export const ReducerComp = () => {
  // we have to pass two parameter in reducer function
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }

    if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  // see array with two element one is undefined and one is function
  console.log(useReducer(reducer, 0));

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{count}</h1>
        {/* Dispatch function send an action to reducer function */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};
