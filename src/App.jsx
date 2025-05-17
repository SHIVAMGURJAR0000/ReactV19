import { UseRef } from "./components/hooks/useRef";

export const App = () => {
  //useRef Hook
  return <UseRef />;
};

// useRef is a React hook htat lets you reference a value that is not nedded for rendering.
// its directly mutable and does not cause re-renders when changed.
// you can access value of its using yourRef.current
// use for uncontrolled componenets
