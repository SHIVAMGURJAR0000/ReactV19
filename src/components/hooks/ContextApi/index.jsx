import { createContext } from "react";

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
