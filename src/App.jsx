import { BioProvider } from "./components/hooks/ContextApi";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
// import { Home } from "./components/hooks/ContextApi/Home";
// import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
import MemoParentComponent from "./components/hooks/Memo/UseMemo";
// import { ReducerComp } from "./components/hooks/useReducer";

export const App = () => {
  return (
    <BioProvider>
      {/* <MemoParentComponent />; */}
      <ReactMemo />
      {/* import for this  */}
    </BioProvider>
  );
};

// React.memo vs useMemo

///  use memo
// const memoizedValue = useMemo(()=>{
//your computation logic
// return computed logic
// }, [dependencies])  syntax same as useEffect

// use memo is a react hook used for memoziation.
// memoization is a technique to optimize performance by caching the results of expensive fucntions calls
// use it when you want to prevent unnecessary re-execution of a function on every render.
// usefull for optimizing performance in situation where calculations or operation are computationally expensive.
// Overusing useMemo might lead to unnecessary complexity and impact readability.
// it work for values , i function optimization then use useCallback
// Important use useMemo with values and objects.
