import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    //Use this to stop propagation
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      {/* Bubbling phase */}
      {/* <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div */}
      {/* here when i click button then handleChildClick trigger -> handleParentClick -> handleGrandParent*/}
      {/* we can stop this */}
      {/* when we click on button then onl handleChildClick should trigger */}
      {/* </button>
        </div>
      </div> */}

      {/* capturing phase use onCLickCapture */}
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
