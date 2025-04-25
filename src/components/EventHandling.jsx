import "./Ev.css";

export const EventHandling = () => {
  // Traditional function
  // function handleButtonClick(){
  //     alert("Hey, I am onclick Event");
  // }

  //Function for Event Handling
  const handleButtonClick = (event) => {
    console.log(event); // we get synthticBaseEvent (it's a wrapper which have event => to work all browser perfectly).
    console.log(event.target);
    console.log(event.type);
    alert("Hey, I am onclick Event");
  };

  const handleWelcomeUse = (name) => {
    console.log("welcome Users");
    console.log(name);
  };

  return (
    <>
      {/*Functipon component with Named Function 
        Remember how we haven't called this function, if you call 
        this function here then it will run wihtout even clicking.
        you just need to pass reference and not call here.
        */}
      <button onClick={handleButtonClick}>Click me</button>
      <br />
      {/*
            In react, event handlers receive the event object as ans argument by default.
            However, when you use an arrow function directly in the onClick attribute without
            passing the event explicitly, React dosen't pass the event object to you handler
            function. This is because the arrow function creates a new function and call your
            handler without passing any argument
            */}
      <button
        onClick={
          // callback function
          // when we use this way, then react can pass sythe. event obj
          //so we have to pass it manually
          // now we get pointer event
          () => handleButtonClick(event)
        }
      >
        Click me 2
      </button>
      {/* inline event handler */}
      <button
        onClick={(event) => {
          console.log(event);
        }}
      >
        Inline Function
      </button>
      {/* Passing argumnet to Event Handler */}
      {/* this format run by default without click so use fat arrow */}
      {/* <button onClick={handleWelcomeUse("shivam")}>Argumnet passing</button>  */}
      <button onClick={() => handleWelcomeUse("shivam")}>
        Argumnet passing
      </button>
    </>
  );
};
