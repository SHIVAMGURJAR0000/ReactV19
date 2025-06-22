import { useMemo, useState } from "react";
import Counts from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  // const myBioData = {
  //   name: "John Doe",
  //   age: 30,
  // };

  const myBioData = useMemo(() => {
    return {
      name: "John Doe",
      age: 30,
    };
  }, []);

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={myBioData} />
    </>
  );
};

// passing props to counts
// when we are passing props to counts component then it will re-render even we are using react.memo.
// if we are using react.memo then it will render only when props change.
// <Counts bioData="shivam"/> if we passing noraml value then it will not re- render but when i am passing object then it will re-render
// so here we use useMemo to memoize the object so that it will not re-render on every click.
// when we pass object as prop mean swe are passing the reference of object.
// every time componemt re-render it will create new object reference.
