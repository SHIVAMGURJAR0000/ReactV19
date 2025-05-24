import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";

export const App = () => {
  // Context Api
  return (
    <BioProvider>
      <Home />;
    </BioProvider>
  );
};

// when we send data to grandgrandParent to grand parent then to parent then to child then for grandParent and parent there is no use of data
// to solve this we use context Api

// Context API is used to avoid prop drilling.

// what is context api?
// ans. A way to pass the data through the component tree without having to pass props down manually at every level.

// createContext: creates a Context object.
// Provider: a component that provides the context value to its children.
// useContext (consumer) : a hook that allows you to consume a context.
