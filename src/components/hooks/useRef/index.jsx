import "../useEffect/index.css";
import { useRef } from "react";
export const UseRef = () => {
  // this is traditional way to get data from input fields which is not recommended in react
  // For this we use useRef hook
  // doucment.getElment is outside of any lifecycle hook so it loaded before jsx so first it show null then after somethime it start working fine whne everything is loaded
  //   const userName = document.getElementById("username"); // username is reference
  //   const password = document.getElementById("password");

  //useRef hook

  const userName = useRef(null); // null is initial value here
  const password = useRef(null);
  // Persist values across renders without causing re-renders
  //(like a container for a variable that doesn't trigger UI updates).

  console.log(userName); // go and see in console

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName.current.value, password.current.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={userName} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
