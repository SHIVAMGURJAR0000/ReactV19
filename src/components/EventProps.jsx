import "./Ev.css";

export const EventProps = () => {
  const HandleWelcome = (user) => {
    alert(`hey, ${user}`);
  };
  const handleHover = () => {
    alert(`hey, Thanks for hovering}`);
  };

  return (
    <>
      {/* Now we are passing event handler as a props  
        now child has the power to  handle events
    */}

      <WelcomeUser
        //   In here props onClick is property of props means e can name it anthing
        // means we can replace onCLick with on ButtonClick
        // but in child we can t change we have to write on click
        onClick={() => HandleWelcome("shivam")} //  This is props
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("hey user, welcome");
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}>click me</button>
      <button onMouseEnter={props.onMouseEnter}>hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
