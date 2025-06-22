import { useCallback, useState } from "react";

const Button = ({ onClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default function UseCallback() {
  const [count, setCount] = useState(0);

  //   const increment = () => {
  //      console.log("increment inside");
  //     setCount((prev) => prev + 1);
  //   };

  const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-2xl mb-4 color-white">Count: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}

// Button is component and passing onClick function as prop
// when we click on increment button then it will re-render the both button function but we don't want that so we use callback
