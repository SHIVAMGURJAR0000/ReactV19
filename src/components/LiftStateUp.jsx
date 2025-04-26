import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  //   const [inputValue, setInputValue] = useState(""); // LIFT UP

  return (
    <>
      <input
        className="p-3"
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p className="italic">The current input value is :{inputValue} </p>;
};
