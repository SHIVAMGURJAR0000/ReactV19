import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";
import { ReducerComp } from "./components/hooks/useReducer";

export const App = () => {
  return (
    <BioProvider>
      <ReducerComp />;
    </BioProvider>
  );
};

/// BEST PRACTICE

// Use Reducer next branch
// Theory
// syntax: const [state, dispatch] = useReducer(reducer, initalState)
// it return array containing the current state and a dispatch function.
// why we use this? => it is an alernative of useState hook.
// use when project is complex with contextApi (Killer combo)
// Dispatch function is used to send action to the reducer, which in turn updates the state based on the action's type and any associated data(payload).
// Reducer Function: A function that takes the current state and an action as argument . and return a new state.
// intial state: The initial value.
// the initial value can be simple value , object, ot even derived from a functrion if the initalization is complex.
