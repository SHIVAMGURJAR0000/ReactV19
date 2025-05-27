import { createContext, use } from "react";

//step1
//Creating context
export const BioContext = createContext();
// *****createContext return a Context Component, not a variable
// Biocontent is a Context component
// first letter must be capital

// step2
// Its like warehouse
// it will provide the data to all the components which are inside this warehouse.
export const BioProvider = ({ children }) => {
  const myName = "Shivam";
  const myAge = 49;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

/// Custom Hooks

export const useBioContext = () => {
  // const context = useContext(BioContext);
  const context = use(BioContext);

  if (context === undefined) {
    throw new Error("Componenet must be wrapped with bio provider");
  }

  console.log(context);
  return context;
};

//userBioContext is a custom hook
