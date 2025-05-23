import { ParentComponent } from "./components/PropDrilling";

export const App = () => {
  // prop drilling
  return <ParentComponent />;
};

// it is a pattern where parent component passes data to child component to deeply nested child component through multiple layer of components.
// even some of the intermediate components do not need the data.
// some of the intermediate component do not need the data so to solve this we can use context api.
