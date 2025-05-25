import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";

export const App = () => {
  // useContext rule in react
  return (
    <BioProvider>
      <Home />;
    </BioProvider>
  );
};

// Rule
// 1. only children of the cointext provider can access the data of context.
