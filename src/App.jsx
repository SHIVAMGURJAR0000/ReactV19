import { BioProvider } from "./components/hooks/ContextApi";
// import { Home } from "./components/hooks/ContextApi/Home";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
// import { ReducerComp } from "./components/hooks/useReducer";

export const App = () => {
  return (
    <BioProvider>
      <ReactMemo />;
    </BioProvider>
  );
};

/// React.memo()

// react.memo, useMemo, useCallback deprecated
// now we use compiler
// but its not perfect release just now

// its a function is used for memiozation of functional components.
// ek componet me kya prop change ho raha h ya nhi ye dekta h y
// if props not change then react skip rendering
// its a higher order component
