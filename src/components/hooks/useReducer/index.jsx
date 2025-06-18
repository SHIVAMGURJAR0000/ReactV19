import { useReducer, useState } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
    initText: "hello",
  };

  // we have to pass two parameter in reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      //updating the entire object
      // if there is more that one key and we only change count then other key will losse their value
      // use this syntax
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
      default:
        return state;
    }
  };
  //   const [count, setCount] = useState(0);
  //   const [count, dispatch] = useReducer(reducer, 0);
  //best practice
  const [state, dispatch] = useReducer(reducer, initialState);
  // see array with two element one is undefined and one is function
  //   console.log(useReducer(reducer, 0));

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{state.count}</h1>
        {/* Dispatch function send an action to reducer function */}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>

        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
    </>
  );
};

// best practice ******
// if we have multiple intial value like form field text, password or more then we make lot of reducer but dont do that pass object as intital value

// learn
// how to use useReducer
// how to reduce if conditions
// how to use object as intial value
// how we can use more that one state variable in clean way with the help of useReducer
