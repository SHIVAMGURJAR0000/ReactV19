import { useState } from "react";

export const State = () => {
  console.log(useState());

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
