import React from "react";
// import { Counter } from "./components/hooks/useState";
import { UseEffectChanllenge } from "./components/hooks/useState/challenge";

export const App = () => {
  //UseState hook + useState challenge
  return <UseEffectChanllenge />;
};

//Theory

// 1) let you use different React features from your componenets.
// 2) useState, useEffects, useContext, useReducer or more.
// 3) only be used at the top level of your top level compnonent.
// 4) Do not call hooks inside loops , conditions, or nested functions.
// 5) Hooks can not be use in regular js and not in class also , only use in fucntion based components.
// 6) we can create our own custom hooks buy using use+functionName (ex => useFetch, useShivam)
