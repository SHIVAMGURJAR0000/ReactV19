import { BioProvider } from "./components/hooks/ContextApi";
import { Home } from "./components/hooks/ContextApi/Home";

export const App = () => {
  return (
    <BioProvider>
      <Home />;
    </BioProvider>
  );
};

// New "use" Hook in react 19

// it is a react api

// dont use useContext use "use" hook

// when context is passed to a component , it will similar to usecontext

// advantage : you can use inside condition like if , else , switch case,
