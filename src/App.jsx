import { ForwardRef } from "./components/hooks/useRef/forwardRef";

export const App = () => {
  // Forward ref
  return <ForwardRef />;
};

// It allows parent components to move down (or forward) refs to child components.
// useRef is only used for uncontrolled components.
// pass data to parent to child componnet. no re rendering.
//syntax : React.forwaredRef(props, ref) =>{}).
// But in react 19 we dont use forward red.
// in react 19 we can directly send refs using props.
