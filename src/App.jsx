import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";

export const App = () => {
  //Create Custom Hooks
  return (
    <BioProvider>
      <Home />;
    </BioProvider>
  );
};

// Custom Hooks in React
// Do not repeat yourself

//Rules to create Custom Hooks

// 1) prefix with use
// 2) Use Built-in Hooks
// 3) Avoid Side Effects outside the Custom hooks
// 4) keep Hooks pure
