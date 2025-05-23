import { UseId } from "./components/hooks/useId";

export const App = () => {
  //use id hook
  return <UseId />;
};

// generate unique id
// it does not take any parameter
// return unique id
// it is used for accessiblity
// Note : useId should not be used to genetrate keys in a list.
