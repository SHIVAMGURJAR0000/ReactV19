// import { useContext } from "react";
import { BioContext, useBioContext } from ".";

export const Home = () => {
  // const { myName, myAge } = useContext(BioContext);
  // now we can use our custom hook which is availble in index.jsx
  const { myName, myAge } = useBioContext();
  return (
    <h1>
      Hello contextAPi , my name is {myName}, and age is {myAge}
    </h1>
  );
};
