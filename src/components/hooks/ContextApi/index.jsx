import { createContext } from "react";

//step1
export const BioContext = createContext();
// *****createContext return a Context Component, not a variable
// first letter must be capital

// step2
// Its like warehouse
export const BioProvider = ({ children }) => {
  const myName = "Shivam";
  const myAge = 49;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};
