import { useState } from "react";

export const State = () => {
  console.log(useState()); //see in console
  //   let array = useState();
  //   console.log(array);

  // destructure
  let [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => {
      return count + 1;
    });
  };

  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Incrememt</button>
      </section>
    </>
  );
};

/*#why React?
 - Its because those are normal variables and React.js dosen't know that it's going to be changes.
 - And that react should respond or update DOM based on that.
 - Those values are already rendered on DOM , there is no way they will be re-rendered.
 - For that React.js provides a fucntion called "useState".
 - This type of function which starts with "use" is called hook.
 - This is a special function which has some features provided by react.js.
 - There are other hooks too
 - syntax: 
   const[current state vaiable, a function that updates state variable] = useaState(0)
   //0 is the intial value

*/
