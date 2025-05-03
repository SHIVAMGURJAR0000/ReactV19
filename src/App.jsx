import React from "react";
// import { Counter } from "./components/hooks/useState";
import { UseEffectChanllenge } from "./components/hooks/useState/challenge";

export const App = () => {
  //controlled vs uncontrolled component
  return <UseEffectChanllenge />;
};

//Theory

// 1) let you use different React features from your componenets.
// 2) useState, useEffects, useContext, useReducer or more.
// 3) only be used at the top level of your top level compnonent.
// 4) Do not call hooks inside loops , conditions, or nested functions.
// 5) Hooks can not be use in regular js and not in class also , only use in fucntion based components.
// 6) we can create our own custom hooks buy using use+functionName (ex => useFetch, useShivam)

// controlled vs uncontrolled

// what is control and uncontroll

// controlled component in form
// - where form data is handled by react component state(menas hook) then it is called controlled.
// - read slides
// - we will get warning in console when we change controlled to uncontrolled and vice-cersa
// - controlled componenet -
//  - when text field use hook like useState
//  - when we are using event handlers like onChngange, onBlur, etc.
//  - state updation

// uncontrolled
// - direct dom manipulation.
// - event handling
// - Accessing form data

// React power controll the form
// when we use direct dom manipulation which is called traditional way then we can't use react powers.
