import { BioProvider } from "./components/hooks/ContextApi";
import UseCallback from "./components/hooks/Memo/useCallback";

export const App = () => {
  return (
    <BioProvider>
      <UseCallback />
    </BioProvider>
  );
};

// useCallback
