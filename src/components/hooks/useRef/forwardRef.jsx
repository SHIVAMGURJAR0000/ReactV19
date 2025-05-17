import { forwardRef, useId, useRef } from "react";
import "../useEffect/index.css";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input label="Username" ref={username} />
      <BeforeReact19Input label="Password" ref={password} />
      <button type="submit">Submit</button>
    </form>
  );
};

// Child component with ref forwarding
// this was before react 19
// const BeforeReact19Input = forwardRef(({ label }, ref) => {
//   const id = useId(); // unique ID for accessibility

//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input type="text" id={id} ref={ref} />
//     </div>
//   );
// });

//after react 19
const BeforeReact19Input = (props) => {
  const id = useId(); // unique ID for accessibility

  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" id={id} ref={props.ref} />
    </div>
  );
};
